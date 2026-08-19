# `dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummary <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary google_storage_control_organization_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  filter: str = None,
  id: str = None,
  location: str = None,
  resource_scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The ID of the Google Cloud Organization. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.resourceScope">resource_scope</a></code> | <code>str</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.organization"></a>

- *Type:* str

The ID of the Google Cloud Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#organization DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#organization}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.filter"></a>

- *Type:* str

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#filter DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.location"></a>

- *Type:* str

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#location DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#location}

---

##### `resource_scope`<sup>Optional</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.resourceScope"></a>

- *Type:* str

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#resource_scope DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#resource_scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope">reset_resource_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_resource_scope` <a name="reset_resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope"></a>

```python
def reset_resource_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleStorageControlOrganizationIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries">finding_summaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput">resource_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope">resource_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `finding_summaries`<sup>Required</sup> <a name="finding_summaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries"></a>

```python
finding_summaries: DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `resource_scope_input`<sup>Optional</sup> <a name="resource_scope_input" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```python
resource_scope_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `resource_scope`<sup>Required</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope"></a>

```python
resource_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  filter: str = None,
  id: str = None,
  location: str = None,
  resource_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization">organization</a></code> | <code>str</code> | The ID of the Google Cloud Organization. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter">filter</a></code> | <code>str</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location">location</a></code> | <code>str</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope">resource_scope</a></code> | <code>str</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The ID of the Google Cloud Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#organization DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#organization}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#filter DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#location DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#location}

---

##### `resource_scope`<sup>Optional</sup> <a name="resource_scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```python
resource_scope: str
```

- *Type:* str

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#resource_scope DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries()
```


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">summary_details</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `summary_details`<sup>Required</sup> <a name="summary_details" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```python
summary_details: DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_storage_control_organization_intelligence_findings_summary

dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---




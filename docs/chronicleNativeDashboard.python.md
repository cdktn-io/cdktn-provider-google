# `chronicleNativeDashboard` Submodule <a name="`chronicleNativeDashboard` Submodule" id="@cdktn/provider-google.chronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleNativeDashboard <a name="ChronicleNativeDashboard" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  access: str = None,
  charts: IResolvable | typing.List[ChronicleNativeDashboardCharts] = None,
  deletion_policy: str = None,
  description: str = None,
  filters: IResolvable | typing.List[ChronicleNativeDashboardFilters] = None,
  id: str = None,
  is_pinned: bool | IResolvable = None,
  project: str = None,
  timeouts: ChronicleNativeDashboardTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.access">access</a></code> | <code>str</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.charts">charts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]</code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]</code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.displayName"></a>

- *Type:* str

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.instance"></a>

- *Type:* str

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.location"></a>

- *Type:* str

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.access"></a>

- *Type:* str

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.charts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.description"></a>

- *Type:* str

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.isPinned"></a>

- *Type:* bool | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.type"></a>

- *Type:* str

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts">put_charts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts">reset_charts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned">reset_is_pinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_charts` <a name="put_charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts"></a>

```python
def put_charts(
  value: IResolvable | typing.List[ChronicleNativeDashboardCharts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[ChronicleNativeDashboardFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

##### `reset_access` <a name="reset_access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_charts` <a name="reset_charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts"></a>

```python
def reset_charts() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_pinned` <a name="reset_is_pinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned"></a>

```python
def reset_is_pinned() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleNativeDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId">create_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime">last_viewed_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId">update_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput">charts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput">is_pinned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts"></a>

```python
charts: ChronicleNativeDashboardChartsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `create_user_id`<sup>Required</sup> <a name="create_user_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId"></a>

```python
create_user_id: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters"></a>

```python
filters: ChronicleNativeDashboardFiltersList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `last_viewed_time`<sup>Required</sup> <a name="last_viewed_time" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime"></a>

```python
last_viewed_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts"></a>

```python
timeouts: ChronicleNativeDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `update_user_id`<sup>Required</sup> <a name="update_user_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId"></a>

```python
update_user_id: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `charts_input`<sup>Optional</sup> <a name="charts_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput"></a>

```python
charts_input: IResolvable | typing.List[ChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[ChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `is_pinned_input`<sup>Optional</sup> <a name="is_pinned_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput"></a>

```python
is_pinned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleNativeDashboardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `is_pinned`<sup>Required</sup> <a name="is_pinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned"></a>

```python
is_pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleNativeDashboardCharts <a name="ChronicleNativeDashboardCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardCharts(
  chart_layout: ChronicleNativeDashboardChartsChartLayout = None,
  dashboard_chart: str = None,
  filters_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout">chart_layout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart">dashboard_chart</a></code> | <code>str</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds">filters_ids</a></code> | <code>typing.List[str]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `chart_layout`<sup>Optional</sup> <a name="chart_layout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout"></a>

```python
chart_layout: ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}

---

##### `dashboard_chart`<sup>Optional</sup> <a name="dashboard_chart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart"></a>

```python
dashboard_chart: str
```

- *Type:* str

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}

---

##### `filters_ids`<sup>Optional</sup> <a name="filters_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds"></a>

```python
filters_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}

---

### ChronicleNativeDashboardChartsChartLayout <a name="ChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout(
  span_x: typing.Union[int, float],
  span_y: typing.Union[int, float],
  start_x: typing.Union[int, float] = None,
  start_y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX">span_x</a></code> | <code>typing.Union[int, float]</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY">span_y</a></code> | <code>typing.Union[int, float]</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX">start_x</a></code> | <code>typing.Union[int, float]</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY">start_y</a></code> | <code>typing.Union[int, float]</code> | The starting Y coordinate. |

---

##### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```python
span_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

##### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```python
span_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

##### `start_x`<sup>Optional</sup> <a name="start_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```python
start_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

##### `start_y`<sup>Optional</sup> <a name="start_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```python
start_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

### ChronicleNativeDashboardConfig <a name="ChronicleNativeDashboardConfig" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  access: str = None,
  charts: IResolvable | typing.List[ChronicleNativeDashboardCharts] = None,
  deletion_policy: str = None,
  description: str = None,
  filters: IResolvable | typing.List[ChronicleNativeDashboardFilters] = None,
  id: str = None,
  is_pinned: bool | IResolvable = None,
  project: str = None,
  timeouts: ChronicleNativeDashboardTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>str</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location">location</a></code> | <code>str</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access">access</a></code> | <code>str</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]</code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description">description</a></code> | <code>str</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]</code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned">is_pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type">type</a></code> | <code>str</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access"></a>

```python
access: str
```

- *Type:* str

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts"></a>

```python
charts: IResolvable | typing.List[ChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters"></a>

```python
filters: IResolvable | typing.List[ChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned"></a>

```python
is_pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts"></a>

```python
timeouts: ChronicleNativeDashboardTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

### ChronicleNativeDashboardFilters <a name="ChronicleNativeDashboardFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFilters(
  chart_ids: typing.List[str] = None,
  data_source: str = None,
  display_name: str = None,
  field_path: str = None,
  filter_operator_and_field_values: IResolvable | typing.List[ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues] = None,
  id: str = None,
  is_mandatory: bool | IResolvable = None,
  is_standard_time_range_filter: bool | IResolvable = None,
  is_standard_time_range_filter_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds">chart_ids</a></code> | <code>typing.List[str]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource">data_source</a></code> | <code>str</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName">display_name</a></code> | <code>str</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath">field_path</a></code> | <code>str</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filter_operator_and_field_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id">id</a></code> | <code>str</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory">is_mandatory</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">is_standard_time_range_filter</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">is_standard_time_range_filter_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chart_ids`<sup>Optional</sup> <a name="chart_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds"></a>

```python
chart_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}

---

##### `filter_operator_and_field_values`<sup>Optional</sup> <a name="filter_operator_and_field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```python
filter_operator_and_field_values: IResolvable | typing.List[ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id"></a>

```python
id: str
```

- *Type:* str

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_mandatory`<sup>Optional</sup> <a name="is_mandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory"></a>

```python
is_mandatory: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}

---

##### `is_standard_time_range_filter`<sup>Optional</sup> <a name="is_standard_time_range_filter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```python
is_standard_time_range_filter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `is_standard_time_range_filter_enabled`<sup>Optional</sup> <a name="is_standard_time_range_filter_enabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```python
is_standard_time_range_filter_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues(
  field_values: typing.List[str] = None,
  filter_operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">field_values</a></code> | <code>typing.List[str]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filter_operator</a></code> | <code>str</code> | The operator to apply to the field. |

---

##### `field_values`<sup>Optional</sup> <a name="field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```python
field_values: typing.List[str]
```

- *Type:* typing.List[str]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}

---

##### `filter_operator`<sup>Optional</sup> <a name="filter_operator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```python
filter_operator: str
```

- *Type:* str

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}

---

### ChronicleNativeDashboardTimeouts <a name="ChronicleNativeDashboardTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleNativeDashboardChartsChartLayoutOutputReference <a name="ChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">reset_start_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">reset_start_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_x` <a name="reset_start_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```python
def reset_start_x() -> None
```

##### `reset_start_y` <a name="reset_start_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```python
def reset_start_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">span_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">span_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">start_x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">start_y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">span_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">span_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">start_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">start_y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `span_x_input`<sup>Optional</sup> <a name="span_x_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```python
span_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_y_input`<sup>Optional</sup> <a name="span_y_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```python
span_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_x_input`<sup>Optional</sup> <a name="start_x_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```python
start_x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_y_input`<sup>Optional</sup> <a name="start_y_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```python
start_y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```python
span_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```python
span_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_x`<sup>Required</sup> <a name="start_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```python
start_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_y`<sup>Required</sup> <a name="start_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```python
start_y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---


### ChronicleNativeDashboardChartsList <a name="ChronicleNativeDashboardChartsList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardChartsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleNativeDashboardChartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleNativeDashboardCharts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>]

---


### ChronicleNativeDashboardChartsOutputReference <a name="ChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout">put_chart_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout">reset_chart_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart">reset_dashboard_chart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds">reset_filters_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chart_layout` <a name="put_chart_layout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```python
def put_chart_layout(
  span_x: typing.Union[int, float],
  span_y: typing.Union[int, float],
  start_x: typing.Union[int, float] = None,
  start_y: typing.Union[int, float] = None
) -> None
```

###### `span_x`<sup>Required</sup> <a name="span_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.spanX"></a>

- *Type:* typing.Union[int, float]

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

###### `span_y`<sup>Required</sup> <a name="span_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.spanY"></a>

- *Type:* typing.Union[int, float]

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

###### `start_x`<sup>Optional</sup> <a name="start_x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.startX"></a>

- *Type:* typing.Union[int, float]

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

###### `start_y`<sup>Optional</sup> <a name="start_y" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.startY"></a>

- *Type:* typing.Union[int, float]

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

##### `reset_chart_layout` <a name="reset_chart_layout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```python
def reset_chart_layout() -> None
```

##### `reset_dashboard_chart` <a name="reset_dashboard_chart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```python
def reset_dashboard_chart() -> None
```

##### `reset_filters_ids` <a name="reset_filters_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```python
def reset_filters_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout">chart_layout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chart_layout_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboard_chart_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filters_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboard_chart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds">filters_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chart_layout`<sup>Required</sup> <a name="chart_layout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```python
chart_layout: ChronicleNativeDashboardChartsChartLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chart_layout_input`<sup>Optional</sup> <a name="chart_layout_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```python
chart_layout_input: ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboard_chart_input`<sup>Optional</sup> <a name="dashboard_chart_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```python
dashboard_chart_input: str
```

- *Type:* str

---

##### `filters_ids_input`<sup>Optional</sup> <a name="filters_ids_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```python
filters_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dashboard_chart`<sup>Required</sup> <a name="dashboard_chart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```python
dashboard_chart: str
```

- *Type:* str

---

##### `filters_ids`<sup>Required</sup> <a name="filters_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```python
filters_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleNativeDashboardCharts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">reset_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">reset_filter_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_values` <a name="reset_field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```python
def reset_field_values() -> None
```

##### `reset_filter_operator` <a name="reset_filter_operator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```python
def reset_filter_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">field_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filter_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">field_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filter_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_values_input`<sup>Optional</sup> <a name="field_values_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```python
field_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_operator_input`<sup>Optional</sup> <a name="filter_operator_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```python
filter_operator_input: str
```

- *Type:* str

---

##### `field_values`<sup>Required</sup> <a name="field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```python
field_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_operator`<sup>Required</sup> <a name="filter_operator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```python
filter_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### ChronicleNativeDashboardFiltersList <a name="ChronicleNativeDashboardFiltersList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleNativeDashboardFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleNativeDashboardFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>]

---


### ChronicleNativeDashboardFiltersOutputReference <a name="ChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">put_filter_operator_and_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds">reset_chart_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">reset_filter_operator_and_field_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">reset_is_mandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">reset_is_standard_time_range_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">reset_is_standard_time_range_filter_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_operator_and_field_values` <a name="put_filter_operator_and_field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```python
def put_filter_operator_and_field_values(
  value: IResolvable | typing.List[ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---

##### `reset_chart_ids` <a name="reset_chart_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```python
def reset_chart_ids() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_filter_operator_and_field_values` <a name="reset_filter_operator_and_field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```python
def reset_filter_operator_and_field_values() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_mandatory` <a name="reset_is_mandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```python
def reset_is_mandatory() -> None
```

##### `reset_is_standard_time_range_filter` <a name="reset_is_standard_time_range_filter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```python
def reset_is_standard_time_range_filter() -> None
```

##### `reset_is_standard_time_range_filter_enabled` <a name="reset_is_standard_time_range_filter_enabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```python
def reset_is_standard_time_range_filter_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filter_operator_and_field_values</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chart_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filter_operator_and_field_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">is_mandatory_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">is_standard_time_range_filter_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">is_standard_time_range_filter_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds">chart_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory">is_mandatory</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">is_standard_time_range_filter</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">is_standard_time_range_filter_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_operator_and_field_values`<sup>Required</sup> <a name="filter_operator_and_field_values" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```python
filter_operator_and_field_values: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chart_ids_input`<sup>Optional</sup> <a name="chart_ids_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```python
chart_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `filter_operator_and_field_values_input`<sup>Optional</sup> <a name="filter_operator_and_field_values_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```python
filter_operator_and_field_values_input: IResolvable | typing.List[ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_mandatory_input`<sup>Optional</sup> <a name="is_mandatory_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```python
is_mandatory_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_enabled_input`<sup>Optional</sup> <a name="is_standard_time_range_filter_enabled_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```python
is_standard_time_range_filter_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_input`<sup>Optional</sup> <a name="is_standard_time_range_filter_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```python
is_standard_time_range_filter_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `chart_ids`<sup>Required</sup> <a name="chart_ids" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```python
chart_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory`<sup>Required</sup> <a name="is_mandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```python
is_mandatory: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter`<sup>Required</sup> <a name="is_standard_time_range_filter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```python
is_standard_time_range_filter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_standard_time_range_filter_enabled`<sup>Required</sup> <a name="is_standard_time_range_filter_enabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```python
is_standard_time_range_filter_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleNativeDashboardFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>

---


### ChronicleNativeDashboardTimeoutsOutputReference <a name="ChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_native_dashboard

chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleNativeDashboardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---




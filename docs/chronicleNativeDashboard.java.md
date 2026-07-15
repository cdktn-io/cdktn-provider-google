# `chronicleNativeDashboard` Submodule <a name="`chronicleNativeDashboard` Submodule" id="@cdktn/provider-google.chronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleNativeDashboard <a name="ChronicleNativeDashboard" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboard;

ChronicleNativeDashboard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .access(java.lang.String)
//  .charts(IResolvable|java.util.List<ChronicleNativeDashboardCharts>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .filters(IResolvable|java.util.List<ChronicleNativeDashboardFilters>)
//  .id(java.lang.String)
//  .isPinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(ChronicleNativeDashboardTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.charts">charts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>></code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>></code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.access"></a>

- *Type:* java.lang.String

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.charts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>>

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.filters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.isPinned"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts">putCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts">resetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCharts` <a name="putCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts"></a>

```java
public void putCharts(IResolvable|java.util.List<ChronicleNativeDashboardCharts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>>

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<ChronicleNativeDashboardFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts"></a>

```java
public void putTimeouts(ChronicleNativeDashboardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `resetAccess` <a name="resetAccess" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetCharts` <a name="resetCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts"></a>

```java
public void resetCharts()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId"></a>

```java
public void resetId()
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned"></a>

```java
public void resetIsPinned()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboard;

ChronicleNativeDashboard.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboard;

ChronicleNativeDashboard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboard;

ChronicleNativeDashboard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboard;

ChronicleNativeDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleNativeDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleNativeDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId">createUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime">lastViewedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId">updateUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput">chartsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput">isPinnedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts"></a>

```java
public ChronicleNativeDashboardChartsList getCharts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `createUserId`<sup>Required</sup> <a name="createUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId"></a>

```java
public java.lang.String getCreateUserId();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters"></a>

```java
public ChronicleNativeDashboardFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `lastViewedTime`<sup>Required</sup> <a name="lastViewedTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime"></a>

```java
public java.lang.String getLastViewedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts"></a>

```java
public ChronicleNativeDashboardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `updateUserId`<sup>Required</sup> <a name="updateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId"></a>

```java
public java.lang.String getUpdateUserId();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `chartsInput`<sup>Optional</sup> <a name="chartsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardCharts> getChartsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPinnedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleNativeDashboardTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned"></a>

```java
public java.lang.Boolean|IResolvable getIsPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleNativeDashboardCharts <a name="ChronicleNativeDashboardCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardCharts;

ChronicleNativeDashboardCharts.builder()
//  .chartLayout(ChronicleNativeDashboardChartsChartLayout)
//  .dashboardChart(java.lang.String)
//  .filtersIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart">dashboardChart</a></code> | <code>java.lang.String</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds">filtersIds</a></code> | <code>java.util.List<java.lang.String></code> | List of dashboard filter IDs applied to this chart. |

---

##### `chartLayout`<sup>Optional</sup> <a name="chartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout"></a>

```java
public ChronicleNativeDashboardChartsChartLayout getChartLayout();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}

---

##### `dashboardChart`<sup>Optional</sup> <a name="dashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart"></a>

```java
public java.lang.String getDashboardChart();
```

- *Type:* java.lang.String

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}

---

##### `filtersIds`<sup>Optional</sup> <a name="filtersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds"></a>

```java
public java.util.List<java.lang.String> getFiltersIds();
```

- *Type:* java.util.List<java.lang.String>

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}

---

### ChronicleNativeDashboardChartsChartLayout <a name="ChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardChartsChartLayout;

ChronicleNativeDashboardChartsChartLayout.builder()
    .spanX(java.lang.Number)
    .spanY(java.lang.Number)
//  .startX(java.lang.Number)
//  .startY(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX">spanX</a></code> | <code>java.lang.Number</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY">spanY</a></code> | <code>java.lang.Number</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX">startX</a></code> | <code>java.lang.Number</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY">startY</a></code> | <code>java.lang.Number</code> | The starting Y coordinate. |

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```java
public java.lang.Number getSpanX();
```

- *Type:* java.lang.Number

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```java
public java.lang.Number getSpanY();
```

- *Type:* java.lang.Number

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

##### `startX`<sup>Optional</sup> <a name="startX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```java
public java.lang.Number getStartX();
```

- *Type:* java.lang.Number

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

##### `startY`<sup>Optional</sup> <a name="startY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```java
public java.lang.Number getStartY();
```

- *Type:* java.lang.Number

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

### ChronicleNativeDashboardConfig <a name="ChronicleNativeDashboardConfig" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardConfig;

ChronicleNativeDashboardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .access(java.lang.String)
//  .charts(IResolvable|java.util.List<ChronicleNativeDashboardCharts>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .filters(IResolvable|java.util.List<ChronicleNativeDashboardFilters>)
//  .id(java.lang.String)
//  .isPinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .timeouts(ChronicleNativeDashboardTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access">access</a></code> | <code>java.lang.String</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>></code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>></code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned">isPinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardCharts> getCharts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>>

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned"></a>

```java
public java.lang.Boolean|IResolvable getIsPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts"></a>

```java
public ChronicleNativeDashboardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

### ChronicleNativeDashboardFilters <a name="ChronicleNativeDashboardFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFilters;

ChronicleNativeDashboardFilters.builder()
//  .chartIds(java.util.List<java.lang.String>)
//  .dataSource(java.lang.String)
//  .displayName(java.lang.String)
//  .fieldPath(java.lang.String)
//  .filterOperatorAndFieldValues(IResolvable|java.util.List<ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues>)
//  .id(java.lang.String)
//  .isMandatory(java.lang.Boolean|IResolvable)
//  .isStandardTimeRangeFilter(java.lang.Boolean|IResolvable)
//  .isStandardTimeRangeFilterEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds">chartIds</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory">isMandatory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chartIds`<sup>Optional</sup> <a name="chartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds"></a>

```java
public java.util.List<java.lang.String> getChartIds();
```

- *Type:* java.util.List<java.lang.String>

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}

---

##### `filterOperatorAndFieldValues`<sup>Optional</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getFilterOperatorAndFieldValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMandatory`<sup>Optional</sup> <a name="isMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}

---

##### `isStandardTimeRangeFilter`<sup>Optional</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `isStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues;

ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.builder()
//  .fieldValues(java.util.List<java.lang.String>)
//  .filterOperator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">fieldValues</a></code> | <code>java.util.List<java.lang.String></code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filterOperator</a></code> | <code>java.lang.String</code> | The operator to apply to the field. |

---

##### `fieldValues`<sup>Optional</sup> <a name="fieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```java
public java.util.List<java.lang.String> getFieldValues();
```

- *Type:* java.util.List<java.lang.String>

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}

---

##### `filterOperator`<sup>Optional</sup> <a name="filterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```java
public java.lang.String getFilterOperator();
```

- *Type:* java.lang.String

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}

---

### ChronicleNativeDashboardTimeouts <a name="ChronicleNativeDashboardTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardTimeouts;

ChronicleNativeDashboardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleNativeDashboardChartsChartLayoutOutputReference <a name="ChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference;

new ChronicleNativeDashboardChartsChartLayoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">resetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">resetStartY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartX` <a name="resetStartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```java
public void resetStartX()
```

##### `resetStartY` <a name="resetStartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```java
public void resetStartY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">spanXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">spanYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">startXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">startYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">spanX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">spanY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">startX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">startY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spanXInput`<sup>Optional</sup> <a name="spanXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```java
public java.lang.Number getSpanXInput();
```

- *Type:* java.lang.Number

---

##### `spanYInput`<sup>Optional</sup> <a name="spanYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```java
public java.lang.Number getSpanYInput();
```

- *Type:* java.lang.Number

---

##### `startXInput`<sup>Optional</sup> <a name="startXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```java
public java.lang.Number getStartXInput();
```

- *Type:* java.lang.Number

---

##### `startYInput`<sup>Optional</sup> <a name="startYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```java
public java.lang.Number getStartYInput();
```

- *Type:* java.lang.Number

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```java
public java.lang.Number getSpanX();
```

- *Type:* java.lang.Number

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```java
public java.lang.Number getSpanY();
```

- *Type:* java.lang.Number

---

##### `startX`<sup>Required</sup> <a name="startX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```java
public java.lang.Number getStartX();
```

- *Type:* java.lang.Number

---

##### `startY`<sup>Required</sup> <a name="startY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```java
public java.lang.Number getStartY();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```java
public ChronicleNativeDashboardChartsChartLayout getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---


### ChronicleNativeDashboardChartsList <a name="ChronicleNativeDashboardChartsList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardChartsList;

new ChronicleNativeDashboardChartsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get"></a>

```java
public ChronicleNativeDashboardChartsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardCharts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>>

---


### ChronicleNativeDashboardChartsOutputReference <a name="ChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardChartsOutputReference;

new ChronicleNativeDashboardChartsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout">putChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout">resetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart">resetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds">resetFiltersIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChartLayout` <a name="putChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```java
public void putChartLayout(ChronicleNativeDashboardChartsChartLayout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `resetChartLayout` <a name="resetChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```java
public void resetChartLayout()
```

##### `resetDashboardChart` <a name="resetDashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```java
public void resetDashboardChart()
```

##### `resetFiltersIds` <a name="resetFiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```java
public void resetFiltersIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboardChartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filtersIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboardChart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds">filtersIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chartLayout`<sup>Required</sup> <a name="chartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```java
public ChronicleNativeDashboardChartsChartLayoutOutputReference getChartLayout();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chartLayoutInput`<sup>Optional</sup> <a name="chartLayoutInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```java
public ChronicleNativeDashboardChartsChartLayout getChartLayoutInput();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboardChartInput`<sup>Optional</sup> <a name="dashboardChartInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```java
public java.lang.String getDashboardChartInput();
```

- *Type:* java.lang.String

---

##### `filtersIdsInput`<sup>Optional</sup> <a name="filtersIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```java
public java.util.List<java.lang.String> getFiltersIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dashboardChart`<sup>Required</sup> <a name="dashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```java
public java.lang.String getDashboardChart();
```

- *Type:* java.lang.String

---

##### `filtersIds`<sup>Required</sup> <a name="filtersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```java
public java.util.List<java.lang.String> getFiltersIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleNativeDashboardCharts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList;

new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```java
public ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference;

new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">resetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">resetFilterOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldValues` <a name="resetFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```java
public void resetFieldValues()
```

##### `resetFilterOperator` <a name="resetFilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```java
public void resetFilterOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">fieldValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filterOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">fieldValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filterOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldValuesInput`<sup>Optional</sup> <a name="fieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```java
public java.util.List<java.lang.String> getFieldValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterOperatorInput`<sup>Optional</sup> <a name="filterOperatorInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```java
public java.lang.String getFilterOperatorInput();
```

- *Type:* java.lang.String

---

##### `fieldValues`<sup>Required</sup> <a name="fieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```java
public java.util.List<java.lang.String> getFieldValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterOperator`<sup>Required</sup> <a name="filterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```java
public java.lang.String getFilterOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### ChronicleNativeDashboardFiltersList <a name="ChronicleNativeDashboardFiltersList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFiltersList;

new ChronicleNativeDashboardFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get"></a>

```java
public ChronicleNativeDashboardFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>>

---


### ChronicleNativeDashboardFiltersOutputReference <a name="ChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardFiltersOutputReference;

new ChronicleNativeDashboardFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">putFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds">resetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">resetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">resetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">resetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">resetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterOperatorAndFieldValues` <a name="putFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```java
public void putFilterOperatorAndFieldValues(IResolvable|java.util.List<ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---

##### `resetChartIds` <a name="resetChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```java
public void resetChartIds()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetFilterOperatorAndFieldValues` <a name="resetFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```java
public void resetFilterOperatorAndFieldValues()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsMandatory` <a name="resetIsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```java
public void resetIsMandatory()
```

##### `resetIsStandardTimeRangeFilter` <a name="resetIsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```java
public void resetIsStandardTimeRangeFilter()
```

##### `resetIsStandardTimeRangeFilterEnabled` <a name="resetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```java
public void resetIsStandardTimeRangeFilterEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chartIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filterOperatorAndFieldValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">isMandatoryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">isStandardTimeRangeFilterEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">isStandardTimeRangeFilterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds">chartIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory">isMandatory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterOperatorAndFieldValues`<sup>Required</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```java
public ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList getFilterOperatorAndFieldValues();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chartIdsInput`<sup>Optional</sup> <a name="chartIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```java
public java.util.List<java.lang.String> getChartIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `filterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="filterOperatorAndFieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```java
public IResolvable|java.util.List<ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues> getFilterOperatorAndFieldValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isMandatoryInput`<sup>Optional</sup> <a name="isMandatoryInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatoryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartIds`<sup>Required</sup> <a name="chartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```java
public java.util.List<java.lang.String> getChartIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatory`<sup>Required</sup> <a name="isMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```java
public java.lang.Boolean|IResolvable getIsMandatory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilter`<sup>Required</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsStandardTimeRangeFilterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleNativeDashboardFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>

---


### ChronicleNativeDashboardTimeoutsOutputReference <a name="ChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_native_dashboard.ChronicleNativeDashboardTimeoutsOutputReference;

new ChronicleNativeDashboardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleNativeDashboardTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---




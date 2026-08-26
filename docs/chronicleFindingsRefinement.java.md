# `chronicleFindingsRefinement` Submodule <a name="`chronicleFindingsRefinement` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinement <a name="ChronicleFindingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement google_chronicle_findings_refinement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinement;

ChronicleFindingsRefinement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .outcomeFilters(IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters>)
//  .project(java.lang.String)
//  .query(java.lang.String)
//  .timeouts(ChronicleFindingsRefinementTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.outcomeFilters">outcomeFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>></code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#instance ChronicleFindingsRefinement#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#location ChronicleFindingsRefinement#location}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#display_name ChronicleFindingsRefinement#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outcomeFilters`<sup>Optional</sup> <a name="outcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.outcomeFilters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>>

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#outcome_filters ChronicleFindingsRefinement#outcome_filters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#query ChronicleFindingsRefinement#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#timeouts ChronicleFindingsRefinement#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.type"></a>

- *Type:* java.lang.String

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#type ChronicleFindingsRefinement#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters">putOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters">resetOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutcomeFilters` <a name="putOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters"></a>

```java
public void putOutcomeFilters(IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts"></a>

```java
public void putTimeouts(ChronicleFindingsRefinementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId"></a>

```java
public void resetId()
```

##### `resetOutcomeFilters` <a name="resetOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters"></a>

```java
public void resetOutcomeFilters()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinement;

ChronicleFindingsRefinement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinement;

ChronicleFindingsRefinement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinement;

ChronicleFindingsRefinement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinement;

ChronicleFindingsRefinement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleFindingsRefinement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleFindingsRefinement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleFindingsRefinement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters">outcomeFilters</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput">outcomeFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outcomeFilters`<sup>Required</sup> <a name="outcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters"></a>

```java
public ChronicleFindingsRefinementOutcomeFiltersList getOutcomeFilters();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts"></a>

```java
public ChronicleFindingsRefinementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `outcomeFiltersInput`<sup>Optional</sup> <a name="outcomeFiltersInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput"></a>

```java
public IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters> getOutcomeFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleFindingsRefinementTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementConfig <a name="ChronicleFindingsRefinementConfig" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementConfig;

ChronicleFindingsRefinementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .outcomeFilters(IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters>)
//  .project(java.lang.String)
//  .query(java.lang.String)
//  .timeouts(ChronicleFindingsRefinementTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters">outcomeFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>></code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query">query</a></code> | <code>java.lang.String</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type">type</a></code> | <code>java.lang.String</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#instance ChronicleFindingsRefinement#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#location ChronicleFindingsRefinement#location}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#display_name ChronicleFindingsRefinement#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outcomeFilters`<sup>Optional</sup> <a name="outcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters"></a>

```java
public IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters> getOutcomeFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>>

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#outcome_filters ChronicleFindingsRefinement#outcome_filters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#query ChronicleFindingsRefinement#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts"></a>

```java
public ChronicleFindingsRefinementTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#timeouts ChronicleFindingsRefinement#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#type ChronicleFindingsRefinement#type}

---

### ChronicleFindingsRefinementOutcomeFilters <a name="ChronicleFindingsRefinementOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementOutcomeFilters;

ChronicleFindingsRefinementOutcomeFilters.builder()
    .outcomeFilterOperator(java.lang.String)
    .outcomeValue(java.lang.String)
    .outcomeVariable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator">outcomeFilterOperator</a></code> | <code>java.lang.String</code> | The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue">outcomeValue</a></code> | <code>java.lang.String</code> | The value of the outcome variable to match. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable">outcomeVariable</a></code> | <code>java.lang.String</code> | The outcome variable name. |

---

##### `outcomeFilterOperator`<sup>Required</sup> <a name="outcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator"></a>

```java
public java.lang.String getOutcomeFilterOperator();
```

- *Type:* java.lang.String

The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#outcome_filter_operator ChronicleFindingsRefinement#outcome_filter_operator}

---

##### `outcomeValue`<sup>Required</sup> <a name="outcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue"></a>

```java
public java.lang.String getOutcomeValue();
```

- *Type:* java.lang.String

The value of the outcome variable to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#outcome_value ChronicleFindingsRefinement#outcome_value}

---

##### `outcomeVariable`<sup>Required</sup> <a name="outcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable"></a>

```java
public java.lang.String getOutcomeVariable();
```

- *Type:* java.lang.String

The outcome variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#outcome_variable ChronicleFindingsRefinement#outcome_variable}

---

### ChronicleFindingsRefinementTimeouts <a name="ChronicleFindingsRefinementTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementTimeouts;

ChronicleFindingsRefinementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementOutcomeFiltersList <a name="ChronicleFindingsRefinementOutcomeFiltersList" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementOutcomeFiltersList;

new ChronicleFindingsRefinementOutcomeFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get"></a>

```java
public ChronicleFindingsRefinementOutcomeFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleFindingsRefinementOutcomeFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>>

---


### ChronicleFindingsRefinementOutcomeFiltersOutputReference <a name="ChronicleFindingsRefinementOutcomeFiltersOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference;

new ChronicleFindingsRefinementOutcomeFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput">outcomeFilterOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput">outcomeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput">outcomeVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator">outcomeFilterOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue">outcomeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable">outcomeVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outcomeFilterOperatorInput`<sup>Optional</sup> <a name="outcomeFilterOperatorInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput"></a>

```java
public java.lang.String getOutcomeFilterOperatorInput();
```

- *Type:* java.lang.String

---

##### `outcomeValueInput`<sup>Optional</sup> <a name="outcomeValueInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput"></a>

```java
public java.lang.String getOutcomeValueInput();
```

- *Type:* java.lang.String

---

##### `outcomeVariableInput`<sup>Optional</sup> <a name="outcomeVariableInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput"></a>

```java
public java.lang.String getOutcomeVariableInput();
```

- *Type:* java.lang.String

---

##### `outcomeFilterOperator`<sup>Required</sup> <a name="outcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator"></a>

```java
public java.lang.String getOutcomeFilterOperator();
```

- *Type:* java.lang.String

---

##### `outcomeValue`<sup>Required</sup> <a name="outcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue"></a>

```java
public java.lang.String getOutcomeValue();
```

- *Type:* java.lang.String

---

##### `outcomeVariable`<sup>Required</sup> <a name="outcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable"></a>

```java
public java.lang.String getOutcomeVariable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleFindingsRefinementOutcomeFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters">ChronicleFindingsRefinementOutcomeFilters</a>

---


### ChronicleFindingsRefinementTimeoutsOutputReference <a name="ChronicleFindingsRefinementTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_findings_refinement.ChronicleFindingsRefinementTimeoutsOutputReference;

new ChronicleFindingsRefinementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleFindingsRefinementTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---




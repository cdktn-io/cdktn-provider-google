# `dataplexEntryLink` Submodule <a name="`dataplexEntryLink` Submodule" id="@cdktn/provider-google.dataplexEntryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntryLink <a name="DataplexEntryLink" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link google_dataplex_entry_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLink;

DataplexEntryLink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
    .entryLinkId(java.lang.String)
    .entryLinkType(java.lang.String)
    .entryReferences(IResolvable|java.util.List<DataplexEntryLinkEntryReferences>)
    .location(java.lang.String)
//  .aspects(IResolvable|java.util.List<DataplexEntryLinkAspects>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DataplexEntryLinkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryReferences">entryReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>></code> | entry_references block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.aspects">aspects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>></code> | aspects block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryGroupId"></a>

- *Type:* java.lang.String

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_group_id DataplexEntryLink#entry_group_id}

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkId"></a>

- *Type:* java.lang.String

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_link_id DataplexEntryLink#entry_link_id}

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkType"></a>

- *Type:* java.lang.String

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_link_type DataplexEntryLink#entry_link_type}

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryReferences"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>>

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_references DataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#location DataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.aspects"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#aspects DataplexEntryLink#aspects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#timeouts DataplexEntryLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects">putAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences">putEntryReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetAspects">resetAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAspects` <a name="putAspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects"></a>

```java
public void putAspects(IResolvable|java.util.List<DataplexEntryLinkAspects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>>

---

##### `putEntryReferences` <a name="putEntryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences"></a>

```java
public void putEntryReferences(IResolvable|java.util.List<DataplexEntryLinkEntryReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts"></a>

```java
public void putTimeouts(DataplexEntryLinkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

---

##### `resetAspects` <a name="resetAspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetAspects"></a>

```java
public void resetAspects()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexEntryLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLink;

DataplexEntryLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLink;

DataplexEntryLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLink;

DataplexEntryLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLink;

DataplexEntryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexEntryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexEntryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexEntryLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexEntryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexEntryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspects">aspects</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList">DataplexEntryLinkAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferences">entryReferences</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList">DataplexEntryLinkEntryReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference">DataplexEntryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspectsInput">aspectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkIdInput">entryLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkTypeInput">entryLinkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferencesInput">entryReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspects"></a>

```java
public DataplexEntryLinkAspectsList getAspects();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList">DataplexEntryLinkAspectsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferences"></a>

```java
public DataplexEntryLinkEntryReferencesList getEntryReferences();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList">DataplexEntryLinkEntryReferencesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeouts"></a>

```java
public DataplexEntryLinkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference">DataplexEntryLinkTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aspectsInput`<sup>Optional</sup> <a name="aspectsInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspectsInput"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkAspects> getAspectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>>

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupIdInput"></a>

```java
public java.lang.String getEntryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `entryLinkIdInput`<sup>Optional</sup> <a name="entryLinkIdInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkIdInput"></a>

```java
public java.lang.String getEntryLinkIdInput();
```

- *Type:* java.lang.String

---

##### `entryLinkTypeInput`<sup>Optional</sup> <a name="entryLinkTypeInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkTypeInput"></a>

```java
public java.lang.String getEntryLinkTypeInput();
```

- *Type:* java.lang.String

---

##### `entryReferencesInput`<sup>Optional</sup> <a name="entryReferencesInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferencesInput"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkEntryReferences> getEntryReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeoutsInput"></a>

```java
public IResolvable|DataplexEntryLinkTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkId"></a>

```java
public java.lang.String getEntryLinkId();
```

- *Type:* java.lang.String

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkType"></a>

```java
public java.lang.String getEntryLinkType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryLinkAspects <a name="DataplexEntryLinkAspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkAspects;

DataplexEntryLinkAspects.builder()
    .aspect(DataplexEntryLinkAspectsAspect)
    .aspectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | The map keys of the Aspects which the service should modify. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspect"></a>

```java
public DataplexEntryLinkAspectsAspect getAspect();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#aspect DataplexEntryLink#aspect}

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

The map keys of the Aspects which the service should modify.

It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#aspect_key DataplexEntryLink#aspect_key}

---

### DataplexEntryLinkAspectsAspect <a name="DataplexEntryLinkAspectsAspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkAspectsAspect;

DataplexEntryLinkAspectsAspect.builder()
    .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.property.data">data</a></code> | <code>java.lang.String</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#data DataplexEntryLink#data}

---

### DataplexEntryLinkConfig <a name="DataplexEntryLinkConfig" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkConfig;

DataplexEntryLinkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
    .entryLinkId(java.lang.String)
    .entryLinkType(java.lang.String)
    .entryReferences(IResolvable|java.util.List<DataplexEntryLinkEntryReferences>)
    .location(java.lang.String)
//  .aspects(IResolvable|java.util.List<DataplexEntryLinkAspects>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DataplexEntryLinkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryReferences">entryReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>></code> | entry_references block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.aspects">aspects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>></code> | aspects block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_group_id DataplexEntryLink#entry_group_id}

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkId"></a>

```java
public java.lang.String getEntryLinkId();
```

- *Type:* java.lang.String

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_link_id DataplexEntryLink#entry_link_id}

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkType"></a>

```java
public java.lang.String getEntryLinkType();
```

- *Type:* java.lang.String

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_link_type DataplexEntryLink#entry_link_type}

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryReferences"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkEntryReferences> getEntryReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>>

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#entry_references DataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#location DataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.aspects"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkAspects> getAspects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#aspects DataplexEntryLink#aspects}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.timeouts"></a>

```java
public DataplexEntryLinkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#timeouts DataplexEntryLink#timeouts}

---

### DataplexEntryLinkEntryReferences <a name="DataplexEntryLinkEntryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkEntryReferences;

DataplexEntryLinkEntryReferences.builder()
    .name(java.lang.String)
//  .path(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.name">name</a></code> | <code>java.lang.String</code> | The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.path">path</a></code> | <code>java.lang.String</code> | The path in the Entry that is referenced in the Entry Link. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.type">type</a></code> | <code>java.lang.String</code> | The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#name DataplexEntryLink#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path in the Entry that is referenced in the Entry Link.

Empty path denotes that the Entry itself is referenced in the Entry Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#path DataplexEntryLink#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The reference type of the Entry. Possible values: ["SOURCE", "TARGET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#type DataplexEntryLink#type}

---

### DataplexEntryLinkTimeouts <a name="DataplexEntryLinkTimeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkTimeouts;

DataplexEntryLinkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryLinkAspectsAspectOutputReference <a name="DataplexEntryLinkAspectsAspectOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkAspectsAspectOutputReference;

new DataplexEntryLinkAspectsAspectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.aspectType">aspectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectType`<sup>Required</sup> <a name="aspectType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.aspectType"></a>

```java
public java.lang.String getAspectType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.internalValue"></a>

```java
public DataplexEntryLinkAspectsAspect getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

---


### DataplexEntryLinkAspectsList <a name="DataplexEntryLinkAspectsList" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkAspectsList;

new DataplexEntryLinkAspectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get"></a>

```java
public DataplexEntryLinkAspectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkAspects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>>

---


### DataplexEntryLinkAspectsOutputReference <a name="DataplexEntryLinkAspectsOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkAspectsOutputReference;

new DataplexEntryLinkAspectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect">putAspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspect` <a name="putAspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect"></a>

```java
public void putAspect(DataplexEntryLinkAspectsAspect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference">DataplexEntryLinkAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectInput">aspectInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKeyInput">aspectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspect"></a>

```java
public DataplexEntryLinkAspectsAspectOutputReference getAspect();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference">DataplexEntryLinkAspectsAspectOutputReference</a>

---

##### `aspectInput`<sup>Optional</sup> <a name="aspectInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectInput"></a>

```java
public DataplexEntryLinkAspectsAspect getAspectInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

---

##### `aspectKeyInput`<sup>Optional</sup> <a name="aspectKeyInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKeyInput"></a>

```java
public java.lang.String getAspectKeyInput();
```

- *Type:* java.lang.String

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexEntryLinkAspects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>

---


### DataplexEntryLinkEntryReferencesList <a name="DataplexEntryLinkEntryReferencesList" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkEntryReferencesList;

new DataplexEntryLinkEntryReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get"></a>

```java
public DataplexEntryLinkEntryReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataplexEntryLinkEntryReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>>

---


### DataplexEntryLinkEntryReferencesOutputReference <a name="DataplexEntryLinkEntryReferencesOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkEntryReferencesOutputReference;

new DataplexEntryLinkEntryReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexEntryLinkEntryReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>

---


### DataplexEntryLinkTimeoutsOutputReference <a name="DataplexEntryLinkTimeoutsOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_entry_link.DataplexEntryLinkTimeoutsOutputReference;

new DataplexEntryLinkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexEntryLinkTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

---




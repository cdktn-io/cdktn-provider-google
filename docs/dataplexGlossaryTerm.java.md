# `dataplexGlossaryTerm` Submodule <a name="`dataplexGlossaryTerm` Submodule" id="@cdktn/provider-google.dataplexGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexGlossaryTerm <a name="DataplexGlossaryTerm" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term google_dataplex_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTerm;

DataplexGlossaryTerm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .termId(java.lang.String)
//  .timeouts(DataplexGlossaryTermTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#id DataplexGlossaryTerm#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#project DataplexGlossaryTerm#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.termId">termId</a></code> | <code>java.lang.String</code> | The term id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#location DataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#parent DataplexGlossaryTerm#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#deletion_policy DataplexGlossaryTerm#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#description DataplexGlossaryTerm#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#display_name DataplexGlossaryTerm#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.glossaryId"></a>

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#glossary_id DataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#id DataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#labels DataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#project DataplexGlossaryTerm#project}.

---

##### `termId`<sup>Optional</sup> <a name="termId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.termId"></a>

- *Type:* java.lang.String

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#term_id DataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#timeouts DataplexGlossaryTerm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetGlossaryId">resetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetTermId">resetTermId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.putTimeouts"></a>

```java
public void putTimeouts(DataplexGlossaryTermTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGlossaryId` <a name="resetGlossaryId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetGlossaryId"></a>

```java
public void resetGlossaryId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetProject"></a>

```java
public void resetProject()
```

##### `resetTermId` <a name="resetTermId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetTermId"></a>

```java
public void resetTermId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexGlossaryTerm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTerm;

DataplexGlossaryTerm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTerm;

DataplexGlossaryTerm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTerm;

DataplexGlossaryTerm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTerm;

DataplexGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexGlossaryTerm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexGlossaryTerm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference">DataplexGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.glossaryIdInput">glossaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.termIdInput">termIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.termId">termId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.timeouts"></a>

```java
public DataplexGlossaryTermTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference">DataplexGlossaryTermTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `glossaryIdInput`<sup>Optional</sup> <a name="glossaryIdInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.glossaryIdInput"></a>

```java
public java.lang.String getGlossaryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `termIdInput`<sup>Optional</sup> <a name="termIdInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.termIdInput"></a>

```java
public java.lang.String getTermIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.timeoutsInput"></a>

```java
public IResolvable|DataplexGlossaryTermTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `termId`<sup>Required</sup> <a name="termId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.termId"></a>

```java
public java.lang.String getTermId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTerm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexGlossaryTermConfig <a name="DataplexGlossaryTermConfig" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTermConfig;

DataplexGlossaryTermConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .termId(java.lang.String)
//  .timeouts(DataplexGlossaryTermTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#id DataplexGlossaryTerm#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#project DataplexGlossaryTerm#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.termId">termId</a></code> | <code>java.lang.String</code> | The term id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#location DataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#parent DataplexGlossaryTerm#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#deletion_policy DataplexGlossaryTerm#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#description DataplexGlossaryTerm#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#display_name DataplexGlossaryTerm#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#glossary_id DataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#id DataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#labels DataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#project DataplexGlossaryTerm#project}.

---

##### `termId`<sup>Optional</sup> <a name="termId" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.termId"></a>

```java
public java.lang.String getTermId();
```

- *Type:* java.lang.String

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#term_id DataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermConfig.property.timeouts"></a>

```java
public DataplexGlossaryTermTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#timeouts DataplexGlossaryTerm#timeouts}

---

### DataplexGlossaryTermTimeouts <a name="DataplexGlossaryTermTimeouts" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTermTimeouts;

DataplexGlossaryTermTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#create DataplexGlossaryTerm#create}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#delete DataplexGlossaryTerm#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#update DataplexGlossaryTerm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#create DataplexGlossaryTerm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#delete DataplexGlossaryTerm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dataplex_glossary_term#update DataplexGlossaryTerm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexGlossaryTermTimeoutsOutputReference <a name="DataplexGlossaryTermTimeoutsOutputReference" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_term.DataplexGlossaryTermTimeoutsOutputReference;

new DataplexGlossaryTermTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexGlossaryTermTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexGlossaryTerm.DataplexGlossaryTermTimeouts">DataplexGlossaryTermTimeouts</a>

---




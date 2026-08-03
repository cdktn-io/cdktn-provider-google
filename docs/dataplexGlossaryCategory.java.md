# `dataplexGlossaryCategory` Submodule <a name="`dataplexGlossaryCategory` Submodule" id="@cdktn/provider-google.dataplexGlossaryCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexGlossaryCategory <a name="DataplexGlossaryCategory" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category google_dataplex_glossary_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategory;

DataplexGlossaryCategory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .categoryId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexGlossaryCategoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.categoryId">categoryId</a></code> | <code>java.lang.String</code> | The category id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#location DataplexGlossaryCategory#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#parent DataplexGlossaryCategory#parent}

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.categoryId"></a>

- *Type:* java.lang.String

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#category_id DataplexGlossaryCategory#category_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#deletion_policy DataplexGlossaryCategory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#description DataplexGlossaryCategory#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#display_name DataplexGlossaryCategory#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.glossaryId"></a>

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#glossary_id DataplexGlossaryCategory#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#labels DataplexGlossaryCategory#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#timeouts DataplexGlossaryCategory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId">resetCategoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId">resetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts"></a>

```java
public void putTimeouts(DataplexGlossaryCategoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---

##### `resetCategoryId` <a name="resetCategoryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetCategoryId"></a>

```java
public void resetCategoryId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGlossaryId` <a name="resetGlossaryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetGlossaryId"></a>

```java
public void resetGlossaryId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexGlossaryCategory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategory;

DataplexGlossaryCategory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategory;

DataplexGlossaryCategory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategory;

DataplexGlossaryCategory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategory;

DataplexGlossaryCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexGlossaryCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexGlossaryCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexGlossaryCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexGlossaryCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexGlossaryCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput">categoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput">glossaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId">categoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeouts"></a>

```java
public DataplexGlossaryCategoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference">DataplexGlossaryCategoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryIdInput"></a>

```java
public java.lang.String getCategoryIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `glossaryIdInput`<sup>Optional</sup> <a name="glossaryIdInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryIdInput"></a>

```java
public java.lang.String getGlossaryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.timeoutsInput"></a>

```java
public IResolvable|DataplexGlossaryCategoryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.categoryId"></a>

```java
public java.lang.String getCategoryId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexGlossaryCategoryConfig <a name="DataplexGlossaryCategoryConfig" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategoryConfig;

DataplexGlossaryCategoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .categoryId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexGlossaryCategoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId">categoryId</a></code> | <code>java.lang.String</code> | The category id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#location DataplexGlossaryCategory#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#parent DataplexGlossaryCategory#parent}

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.categoryId"></a>

```java
public java.lang.String getCategoryId();
```

- *Type:* java.lang.String

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#category_id DataplexGlossaryCategory#category_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#deletion_policy DataplexGlossaryCategory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#description DataplexGlossaryCategory#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#display_name DataplexGlossaryCategory#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#glossary_id DataplexGlossaryCategory#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#id DataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#labels DataplexGlossaryCategory#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#project DataplexGlossaryCategory#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryConfig.property.timeouts"></a>

```java
public DataplexGlossaryCategoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#timeouts DataplexGlossaryCategory#timeouts}

---

### DataplexGlossaryCategoryTimeouts <a name="DataplexGlossaryCategoryTimeouts" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategoryTimeouts;

DataplexGlossaryCategoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#create DataplexGlossaryCategory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#delete DataplexGlossaryCategory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_glossary_category#update DataplexGlossaryCategory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexGlossaryCategoryTimeoutsOutputReference <a name="DataplexGlossaryCategoryTimeoutsOutputReference" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_glossary_category.DataplexGlossaryCategoryTimeoutsOutputReference;

new DataplexGlossaryCategoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexGlossaryCategoryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexGlossaryCategory.DataplexGlossaryCategoryTimeouts">DataplexGlossaryCategoryTimeouts</a>

---




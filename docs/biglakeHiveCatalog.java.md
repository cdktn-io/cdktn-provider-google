# `biglakeHiveCatalog` Submodule <a name="`biglakeHiveCatalog` Submodule" id="@cdktn/provider-google.biglakeHiveCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveCatalog <a name="BiglakeHiveCatalog" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog google_biglake_hive_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalog;

BiglakeHiveCatalog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .locationUri(java.lang.String)
    .name(java.lang.String)
    .primaryLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BiglakeHiveCatalogTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.locationUri">locationUri</a></code> | <code>java.lang.String</code> | Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Hive Catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Hive catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.locationUri"></a>

- *Type:* java.lang.String

Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#location_uri BiglakeHiveCatalog#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Hive Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#name BiglakeHiveCatalog#name}

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.primaryLocation"></a>

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#primary_location BiglakeHiveCatalog#primary_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#deletion_policy BiglakeHiveCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Hive catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#description BiglakeHiveCatalog#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#timeouts BiglakeHiveCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts"></a>

```java
public void putTimeouts(BiglakeHiveCatalogTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalog;

BiglakeHiveCatalog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalog;

BiglakeHiveCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalog;

BiglakeHiveCatalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalog;

BiglakeHiveCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BiglakeHiveCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BiglakeHiveCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BiglakeHiveCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BiglakeHiveCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList">BiglakeHiveCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference">BiglakeHiveCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUriInput">locationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocationInput">primaryLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.replicas"></a>

```java
public BiglakeHiveCatalogReplicasList getReplicas();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList">BiglakeHiveCatalogReplicasList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeouts"></a>

```java
public BiglakeHiveCatalogTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference">BiglakeHiveCatalogTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUriInput"></a>

```java
public java.lang.String getLocationUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryLocationInput`<sup>Optional</sup> <a name="primaryLocationInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocationInput"></a>

```java
public java.lang.String getPrimaryLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.timeoutsInput"></a>

```java
public IResolvable|BiglakeHiveCatalogTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveCatalogConfig <a name="BiglakeHiveCatalogConfig" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogConfig;

BiglakeHiveCatalogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .locationUri(java.lang.String)
    .name(java.lang.String)
    .primaryLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BiglakeHiveCatalogTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Hive Catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Hive catalog. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

Cloud Storage location path where the catalog data will be stored. Format: gs://bucket/path/to/catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#location_uri BiglakeHiveCatalog#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Hive Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#name BiglakeHiveCatalog#name}

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#primary_location BiglakeHiveCatalog#primary_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#deletion_policy BiglakeHiveCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Hive catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#description BiglakeHiveCatalog#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#id BiglakeHiveCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#project BiglakeHiveCatalog#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogConfig.property.timeouts"></a>

```java
public BiglakeHiveCatalogTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#timeouts BiglakeHiveCatalog#timeouts}

---

### BiglakeHiveCatalogReplicas <a name="BiglakeHiveCatalogReplicas" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogReplicas;

BiglakeHiveCatalogReplicas.builder()
    .build();
```


### BiglakeHiveCatalogTimeouts <a name="BiglakeHiveCatalogTimeouts" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogTimeouts;

BiglakeHiveCatalogTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#create BiglakeHiveCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#delete BiglakeHiveCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#update BiglakeHiveCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#create BiglakeHiveCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#delete BiglakeHiveCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_catalog#update BiglakeHiveCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveCatalogReplicasList <a name="BiglakeHiveCatalogReplicasList" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogReplicasList;

new BiglakeHiveCatalogReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get"></a>

```java
public BiglakeHiveCatalogReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BiglakeHiveCatalogReplicasOutputReference <a name="BiglakeHiveCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogReplicasOutputReference;

new BiglakeHiveCatalogReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas">BiglakeHiveCatalogReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicasOutputReference.property.internalValue"></a>

```java
public BiglakeHiveCatalogReplicas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogReplicas">BiglakeHiveCatalogReplicas</a>

---


### BiglakeHiveCatalogTimeoutsOutputReference <a name="BiglakeHiveCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_catalog.BiglakeHiveCatalogTimeoutsOutputReference;

new BiglakeHiveCatalogTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveCatalogTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveCatalog.BiglakeHiveCatalogTimeouts">BiglakeHiveCatalogTimeouts</a>

---




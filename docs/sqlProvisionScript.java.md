# `sqlProvisionScript` Submodule <a name="`sqlProvisionScript` Submodule" id="@cdktn/provider-google.sqlProvisionScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlProvisionScript <a name="SqlProvisionScript" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script google_sql_provision_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScript;

SqlProvisionScript.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .script(java.lang.String)
//  .database(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.script">script</a></code> | <code>java.lang.String</code> | The SQL script to provision database resources. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The name of the database to which Terraform connects. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the resources created by the script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the provision script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#instance SqlProvisionScript#instance}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.script"></a>

- *Type:* java.lang.String

The SQL script to provision database resources.

Its execution time limit is 30 s.
Changing this forces the script to be rerun. Make sure the script is idempotent.
You can use statements like "create if not exists …" or
"if not exists (select …) then … end if" to prevent existence-related errors. If it's not
possible to make a statement idempotent, you can run it once and then remove it from this script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#script SqlProvisionScript#script}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The name of the database to which Terraform connects.

Changing
this forces Terraform to connect to the new database and run the script. This argument is
required for Postgres instances. It's optional for MySQL, but some of your queries may require
a database. You can create and use a database in the script or explicitly reference a
google_sql_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#database SqlProvisionScript#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the resources created by the script.

The default is "ABANDON".
It must be "ABANDON" to allow Terraform to abandon the resources. If you want to delete resources, add statements
in the script such as "drop … if exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#deletion_policy SqlProvisionScript#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the provision script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#description SqlProvisionScript#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#project SqlProvisionScript#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqlProvisionScript resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScript;

SqlProvisionScript.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScript;

SqlProvisionScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScript;

SqlProvisionScript.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScript;

SqlProvisionScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlProvisionScript.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SqlProvisionScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlProvisionScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlProvisionScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SqlProvisionScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.scriptInput">scriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.scriptInput"></a>

```java
public java.lang.String getScriptInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlProvisionScriptConfig <a name="SqlProvisionScriptConfig" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.Initializer"></a>

```java
import io.cdktn.providers.google.sql_provision_script.SqlProvisionScriptConfig;

SqlProvisionScriptConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .script(java.lang.String)
//  .database(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.script">script</a></code> | <code>java.lang.String</code> | The SQL script to provision database resources. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.database">database</a></code> | <code>java.lang.String</code> | The name of the database to which Terraform connects. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the resources created by the script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the provision script. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}. |
| <code><a href="#@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#instance SqlProvisionScript#instance}

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

The SQL script to provision database resources.

Its execution time limit is 30 s.
Changing this forces the script to be rerun. Make sure the script is idempotent.
You can use statements like "create if not exists …" or
"if not exists (select …) then … end if" to prevent existence-related errors. If it's not
possible to make a statement idempotent, you can run it once and then remove it from this script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#script SqlProvisionScript#script}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The name of the database to which Terraform connects.

Changing
this forces Terraform to connect to the new database and run the script. This argument is
required for Postgres instances. It's optional for MySQL, but some of your queries may require
a database. You can create and use a database in the script or explicitly reference a
google_sql_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#database SqlProvisionScript#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the resources created by the script.

The default is "ABANDON".
It must be "ABANDON" to allow Terraform to abandon the resources. If you want to delete resources, add statements
in the script such as "drop … if exists".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#deletion_policy SqlProvisionScript#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the provision script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#description SqlProvisionScript#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.sqlProvisionScript.SqlProvisionScriptConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/sql_provision_script#project SqlProvisionScript#project}

---




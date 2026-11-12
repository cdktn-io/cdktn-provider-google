# `secretManagerRegionalSecretManagedRotation` Submodule <a name="`secretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretManagedRotation <a name="SecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotation;

SecretManagerRegionalSecretManagedRotation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudSqlSingleUserCredentials(SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SecretManagerRegionalSecretManagedRotationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">putCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudSqlSingleUserCredentials` <a name="putCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```java
public void putCloudSqlSingleUserCredentials(SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```java
public void putTimeouts(SecretManagerRegionalSecretManagedRotationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotation;

SecretManagerRegionalSecretManagedRotation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotation;

SecretManagerRegionalSecretManagedRotation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotation;

SecretManagerRegionalSecretManagedRotation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotation;

SecretManagerRegionalSecretManagedRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretManagerRegionalSecretManagedRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretManagerRegionalSecretManagedRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">cloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```java
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference getCloudSqlSingleUserCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationList getRotation();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```java
public SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `cloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="cloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```java
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getCloudSqlSingleUserCredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```java
public IResolvable|SecretManagerRegionalSecretManagedRotationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;

SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.builder()
    .instanceId(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .passwordWo(java.lang.String)
//  .passwordWoVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">username</a></code> | <code>java.lang.String</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">password</a></code> | <code>java.lang.String</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'password_wo' write-only. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#instance_id SecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#username SecretManagerRegionalSecretManagedRotation#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password SecretManagerRegionalSecretManagedRotation#password}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo SecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```java
public java.lang.String getPasswordWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo_version SecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### SecretManagerRegionalSecretManagedRotationConfig <a name="SecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationConfig;

SecretManagerRegionalSecretManagedRotationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudSqlSingleUserCredentials(SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SecretManagerRegionalSecretManagedRotationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```java
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getCloudSqlSingleUserCredentials();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```java
public SecretManagerRegionalSecretManagedRotationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}

---

### SecretManagerRegionalSecretManagedRotationRotation <a name="SecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotation;

SecretManagerRegionalSecretManagedRotationRotation.builder()
    .build();
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus;

SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.builder()
    .build();
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError;

SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.builder()
    .build();
```


### SecretManagerRegionalSecretManagedRotationTimeouts <a name="SecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationTimeouts;

SecretManagerRegionalSecretManagedRotationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference;

new SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```java
public void resetPasswordWo()
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```java
public void resetPasswordWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```java
public java.lang.String getPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```java
public java.lang.String getPasswordWoVersionInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```java
public java.lang.String getPasswordWoVersion();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### SecretManagerRegionalSecretManagedRotationRotationList <a name="SecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationList;

new SecretManagerRegionalSecretManagedRotationRotationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference;

new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### SecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference;

new SecretManagerRegionalSecretManagedRotationRotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">managedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedRotationStatus`<sup>Required</sup> <a name="managedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList getManagedRotationStatus();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```java
public SecretManagerRegionalSecretManagedRotationRotation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a>

---


### SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secret_manager_regional_secret_managed_rotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference;

new SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecretManagerRegionalSecretManagedRotationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---




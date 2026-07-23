# `apigeeDatastore` Submodule <a name="`apigeeDatastore` Submodule" id="@cdktn/provider-google.apigeeDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeDatastore <a name="ApigeeDatastore" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore google_apigee_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastore;

ApigeeDatastore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datastoreConfig(ApigeeDatastoreDatastoreConfig)
    .displayName(java.lang.String)
    .orgId(java.lang.String)
    .targetType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeDatastoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.datastoreConfig">datastoreConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | datastore_config block. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the datastore. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datastoreConfig`<sup>Required</sup> <a name="datastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.datastoreConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

datastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#datastore_config ApigeeDatastore#datastore_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#display_name ApigeeDatastore#display_name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#org_id ApigeeDatastore#org_id}

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#target_type ApigeeDatastore#target_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#deletion_policy ApigeeDatastore#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#timeouts ApigeeDatastore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig">putDatastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastoreConfig` <a name="putDatastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig"></a>

```java
public void putDatastoreConfig(ApigeeDatastoreDatastoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putDatastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts"></a>

```java
public void putTimeouts(ApigeeDatastoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastore;

ApigeeDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastore;

ApigeeDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastore;

ApigeeDatastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastore;

ApigeeDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfig">datastoreConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference">ApigeeDatastoreDatastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.org">org</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference">ApigeeDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfigInput">datastoreConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `datastoreConfig`<sup>Required</sup> <a name="datastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfig"></a>

```java
public ApigeeDatastoreDatastoreConfigOutputReference getDatastoreConfig();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference">ApigeeDatastoreDatastoreConfigOutputReference</a>

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.lastUpdateTime"></a>

```java
public java.lang.String getLastUpdateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.org"></a>

```java
public java.lang.String getOrg();
```

- *Type:* java.lang.String

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.selfAttribute"></a>

```java
public java.lang.String getSelfAttribute();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeouts"></a>

```java
public ApigeeDatastoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference">ApigeeDatastoreTimeoutsOutputReference</a>

---

##### `datastoreConfigInput`<sup>Optional</sup> <a name="datastoreConfigInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.datastoreConfigInput"></a>

```java
public ApigeeDatastoreDatastoreConfig getDatastoreConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeDatastoreTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeDatastoreConfig <a name="ApigeeDatastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastoreConfig;

ApigeeDatastoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datastoreConfig(ApigeeDatastoreDatastoreConfig)
    .displayName(java.lang.String)
    .orgId(java.lang.String)
    .targetType(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeDatastoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.datastoreConfig">datastoreConfig</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | datastore_config block. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the datastore. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datastoreConfig`<sup>Required</sup> <a name="datastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.datastoreConfig"></a>

```java
public ApigeeDatastoreDatastoreConfig getDatastoreConfig();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

datastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#datastore_config ApigeeDatastore#datastore_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#display_name ApigeeDatastore#display_name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee datastore, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#org_id ApigeeDatastore#org_id}

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

The type of target for the datastore. Must be 'gcs' for Google Cloud Storage or 'bigquery' for BigQuery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#target_type ApigeeDatastore#target_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#deletion_policy ApigeeDatastore#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#id ApigeeDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreConfig.property.timeouts"></a>

```java
public ApigeeDatastoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#timeouts ApigeeDatastore#timeouts}

---

### ApigeeDatastoreDatastoreConfig <a name="ApigeeDatastoreDatastoreConfig" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastoreDatastoreConfig;

ApigeeDatastoreDatastoreConfig.builder()
    .projectId(java.lang.String)
//  .bucketName(java.lang.String)
//  .datasetName(java.lang.String)
//  .path(java.lang.String)
//  .tablePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The GCP project ID that the datastore target resides in. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the Cloud Storage bucket. Required for 'gcs' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | The name of the BigQuery dataset. Required for 'bigquery' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path within the Cloud Storage bucket. Used for 'gcs' target type. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | The prefix for BigQuery table names. Used for 'bigquery' target type. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The GCP project ID that the datastore target resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#project_id ApigeeDatastore#project_id}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the Cloud Storage bucket. Required for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#bucket_name ApigeeDatastore#bucket_name}

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

The name of the BigQuery dataset. Required for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#dataset_name ApigeeDatastore#dataset_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path within the Cloud Storage bucket. Used for 'gcs' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#path ApigeeDatastore#path}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

The prefix for BigQuery table names. Used for 'bigquery' target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#table_prefix ApigeeDatastore#table_prefix}

---

### ApigeeDatastoreTimeouts <a name="ApigeeDatastoreTimeouts" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastoreTimeouts;

ApigeeDatastoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#create ApigeeDatastore#create}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#delete ApigeeDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#update ApigeeDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#create ApigeeDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#delete ApigeeDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_datastore#update ApigeeDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeDatastoreDatastoreConfigOutputReference <a name="ApigeeDatastoreDatastoreConfigOutputReference" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastoreDatastoreConfigOutputReference;

new ApigeeDatastoreDatastoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetDatasetName"></a>

```java
public void resetDatasetName()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.resetTablePrefix"></a>

```java
public void resetTablePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefixInput">tablePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefixInput"></a>

```java
public java.lang.String getTablePrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfigOutputReference.property.internalValue"></a>

```java
public ApigeeDatastoreDatastoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreDatastoreConfig">ApigeeDatastoreDatastoreConfig</a>

---


### ApigeeDatastoreTimeoutsOutputReference <a name="ApigeeDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_datastore.ApigeeDatastoreTimeoutsOutputReference;

new ApigeeDatastoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeDatastoreTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeDatastore.ApigeeDatastoreTimeouts">ApigeeDatastoreTimeouts</a>

---




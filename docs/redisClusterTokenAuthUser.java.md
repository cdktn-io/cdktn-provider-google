# `redisClusterTokenAuthUser` Submodule <a name="`redisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.redisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterTokenAuthUser <a name="RedisClusterTokenAuthUser" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUser;

RedisClusterTokenAuthUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .userId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(RedisClusterTokenAuthUserTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts"></a>

```java
public void putTimeouts(RedisClusterTokenAuthUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUser;

RedisClusterTokenAuthUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUser;

RedisClusterTokenAuthUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUser;

RedisClusterTokenAuthUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUser;

RedisClusterTokenAuthUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedisClusterTokenAuthUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedisClusterTokenAuthUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts"></a>

```java
public RedisClusterTokenAuthUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput"></a>

```java
public IResolvable|RedisClusterTokenAuthUserTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterTokenAuthUserConfig <a name="RedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.Initializer"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUserConfig;

RedisClusterTokenAuthUserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .userId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(RedisClusterTokenAuthUserTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts"></a>

```java
public RedisClusterTokenAuthUserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

### RedisClusterTokenAuthUserTimeouts <a name="RedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUserTimeouts;

RedisClusterTokenAuthUserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterTokenAuthUserTimeoutsOutputReference <a name="RedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.redis_cluster_token_auth_user.RedisClusterTokenAuthUserTimeoutsOutputReference;

new RedisClusterTokenAuthUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisClusterTokenAuthUserTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---




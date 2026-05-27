# `apigeeEnvironmentKeyvaluemapsEntries` Submodule <a name="`apigeeEnvironmentKeyvaluemapsEntries` Submodule" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentKeyvaluemapsEntries <a name="ApigeeEnvironmentKeyvaluemapsEntries" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntries;

ApigeeEnvironmentKeyvaluemapsEntries.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envKeyvaluemapId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvironmentKeyvaluemapsEntriesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#id ApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId"></a>

- *Type:* java.lang.String

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id ApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#name ApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#value ApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#deletion_policy ApigeeEnvironmentKeyvaluemapsEntries#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#id ApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#timeouts ApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.putTimeouts"></a>

```java
public void putTimeouts(ApigeeEnvironmentKeyvaluemapsEntriesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isConstruct"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntries;

ApigeeEnvironmentKeyvaluemapsEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntries;

ApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntries;

ApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntries;

ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeEnvironmentKeyvaluemapsEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeEnvironmentKeyvaluemapsEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentKeyvaluemapsEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput">envKeyvaluemapIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.timeouts"></a>

```java
public ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `envKeyvaluemapIdInput`<sup>Optional</sup> <a name="envKeyvaluemapIdInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput"></a>

```java
public java.lang.String getEnvKeyvaluemapIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput"></a>

```java
public IResolvable|ApigeeEnvironmentKeyvaluemapsEntriesTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId"></a>

```java
public java.lang.String getEnvKeyvaluemapId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentKeyvaluemapsEntriesConfig <a name="ApigeeEnvironmentKeyvaluemapsEntriesConfig" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntriesConfig;

ApigeeEnvironmentKeyvaluemapsEntriesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envKeyvaluemapId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApigeeEnvironmentKeyvaluemapsEntriesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId">envKeyvaluemapId</a></code> | <code>java.lang.String</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value">value</a></code> | <code>java.lang.String</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#id ApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envKeyvaluemapId`<sup>Required</sup> <a name="envKeyvaluemapId" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId"></a>

```java
public java.lang.String getEnvKeyvaluemapId();
```

- *Type:* java.lang.String

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id ApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#name ApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#value ApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#deletion_policy ApigeeEnvironmentKeyvaluemapsEntries#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#id ApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts"></a>

```java
public ApigeeEnvironmentKeyvaluemapsEntriesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#timeouts ApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

### ApigeeEnvironmentKeyvaluemapsEntriesTimeouts <a name="ApigeeEnvironmentKeyvaluemapsEntriesTimeouts" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts;

ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#create ApigeeEnvironmentKeyvaluemapsEntries#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#delete ApigeeEnvironmentKeyvaluemapsEntries#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#create ApigeeEnvironmentKeyvaluemapsEntries#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/apigee_environment_keyvaluemaps_entries#delete ApigeeEnvironmentKeyvaluemapsEntries#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference <a name="ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apigee_environment_keyvaluemaps_entries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference;

new ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigeeEnvironmentKeyvaluemapsEntriesTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeEnvironmentKeyvaluemapsEntries.ApigeeEnvironmentKeyvaluemapsEntriesTimeouts">ApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---




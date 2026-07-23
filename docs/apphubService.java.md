# `apphubService` Submodule <a name="`apphubService` Submodule" id="@cdktn/provider-google.apphubService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApphubService <a name="ApphubService" id="@cdktn/provider-google.apphubService.ApphubService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service google_apphub_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubService.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubService;

ApphubService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .discoveredService(java.lang.String)
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .attributes(ApphubServiceAttributes)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ApphubServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.discoveredService">discoveredService</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the original discovered service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The Service identifier. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-defined description of a Service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined name for the Service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#id ApphubService#id}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#project ApphubService#project}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#application_id ApphubService#application_id}

---

##### `discoveredService`<sup>Required</sup> <a name="discoveredService" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.discoveredService"></a>

- *Type:* java.lang.String

Immutable. The resource name of the original discovered service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#discovered_service ApphubService#discovered_service}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#location ApphubService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The Service identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#service_id ApphubService#service_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#attributes ApphubService#attributes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#deletion_policy ApphubService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-defined description of a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#description ApphubService#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-defined name for the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#display_name ApphubService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#id ApphubService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#project ApphubService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apphubService.ApphubService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#timeouts ApphubService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apphubService.ApphubService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apphubService.ApphubService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apphubService.ApphubService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apphubService.ApphubService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apphubService.ApphubService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apphubService.ApphubService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apphubService.ApphubService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apphubService.ApphubService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apphubService.ApphubService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apphubService.ApphubService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apphubService.ApphubService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apphubService.ApphubService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apphubService.ApphubService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apphubService.ApphubService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apphubService.ApphubService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apphubService.ApphubService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apphubService.ApphubService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apphubService.ApphubService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apphubService.ApphubService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-google.apphubService.ApphubService.putAttributes"></a>

```java
public void putAttributes(ApphubServiceAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubService.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apphubService.ApphubService.putTimeouts"></a>

```java
public void putTimeouts(ApphubServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google.apphubService.ApphubService.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apphubService.ApphubService.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.apphubService.ApphubService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.apphubService.ApphubService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apphubService.ApphubService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.apphubService.ApphubService.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apphubService.ApphubService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApphubService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apphubService.ApphubService.isConstruct"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubService;

ApphubService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apphubService.ApphubService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apphubService.ApphubService.isTerraformElement"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubService;

ApphubService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apphubService.ApphubService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apphubService.ApphubService.isTerraformResource"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubService;

ApphubService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apphubService.ApphubService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubService;

ApphubService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApphubService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApphubService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApphubService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApphubService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apphubService.ApphubService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApphubService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference">ApphubServiceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.serviceProperties">serviceProperties</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList">ApphubServiceServicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.serviceReference">serviceReference</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList">ApphubServiceServiceReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference">ApphubServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.discoveredServiceInput">discoveredServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.discoveredService">discoveredService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apphubService.ApphubService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apphubService.ApphubService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apphubService.ApphubService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apphubService.ApphubService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apphubService.ApphubService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apphubService.ApphubService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apphubService.ApphubService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apphubService.ApphubService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apphubService.ApphubService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apphubService.ApphubService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apphubService.ApphubService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apphubService.ApphubService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apphubService.ApphubService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.apphubService.ApphubService.property.attributes"></a>

```java
public ApphubServiceAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference">ApphubServiceAttributesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.apphubService.ApphubService.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apphubService.ApphubService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceProperties`<sup>Required</sup> <a name="serviceProperties" id="@cdktn/provider-google.apphubService.ApphubService.property.serviceProperties"></a>

```java
public ApphubServiceServicePropertiesList getServiceProperties();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList">ApphubServiceServicePropertiesList</a>

---

##### `serviceReference`<sup>Required</sup> <a name="serviceReference" id="@cdktn/provider-google.apphubService.ApphubService.property.serviceReference"></a>

```java
public ApphubServiceServiceReferenceList getServiceReference();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList">ApphubServiceServiceReferenceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apphubService.ApphubService.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apphubService.ApphubService.property.timeouts"></a>

```java
public ApphubServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference">ApphubServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.apphubService.ApphubService.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.apphubService.ApphubService.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google.apphubService.ApphubService.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google.apphubService.ApphubService.property.attributesInput"></a>

```java
public ApphubServiceAttributes getAttributesInput();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apphubService.ApphubService.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.apphubService.ApphubService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveredServiceInput`<sup>Optional</sup> <a name="discoveredServiceInput" id="@cdktn/provider-google.apphubService.ApphubService.property.discoveredServiceInput"></a>

```java
public java.lang.String getDiscoveredServiceInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apphubService.ApphubService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apphubService.ApphubService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.apphubService.ApphubService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.apphubService.ApphubService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google.apphubService.ApphubService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apphubService.ApphubService.property.timeoutsInput"></a>

```java
public IResolvable|ApphubServiceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.apphubService.ApphubService.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apphubService.ApphubService.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apphubService.ApphubService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveredService`<sup>Required</sup> <a name="discoveredService" id="@cdktn/provider-google.apphubService.ApphubService.property.discoveredService"></a>

```java
public java.lang.String getDiscoveredService();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apphubService.ApphubService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.apphubService.ApphubService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.apphubService.ApphubService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apphubService.ApphubService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApphubServiceAttributes <a name="ApphubServiceAttributes" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributes;

ApphubServiceAttributes.builder()
//  .businessOwners(IResolvable|java.util.List<ApphubServiceAttributesBusinessOwners>)
//  .criticality(ApphubServiceAttributesCriticality)
//  .developerOwners(IResolvable|java.util.List<ApphubServiceAttributesDeveloperOwners>)
//  .environment(ApphubServiceAttributesEnvironment)
//  .operatorOwners(IResolvable|java.util.List<ApphubServiceAttributesOperatorOwners>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.businessOwners">businessOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>></code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.developerOwners">developerOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>></code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.operatorOwners">operatorOwners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>></code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.businessOwners"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesBusinessOwners> getBusinessOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>>

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#business_owners ApphubService#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.criticality"></a>

```java
public ApphubServiceAttributesCriticality getCriticality();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#criticality ApphubService#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.developerOwners"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesDeveloperOwners> getDeveloperOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>>

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#developer_owners ApphubService#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.environment"></a>

```java
public ApphubServiceAttributesEnvironment getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#environment ApphubService#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributes.property.operatorOwners"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesOperatorOwners> getOperatorOwners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>>

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#operator_owners ApphubService#operator_owners}

---

### ApphubServiceAttributesBusinessOwners <a name="ApphubServiceAttributesBusinessOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesBusinessOwners;

ApphubServiceAttributesBusinessOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#email ApphubService#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#display_name ApphubService#display_name}

---

### ApphubServiceAttributesCriticality <a name="ApphubServiceAttributesCriticality" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesCriticality;

ApphubServiceAttributesCriticality.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality.property.type">type</a></code> | <code>java.lang.String</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#type ApphubService#type}

---

### ApphubServiceAttributesDeveloperOwners <a name="ApphubServiceAttributesDeveloperOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesDeveloperOwners;

ApphubServiceAttributesDeveloperOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#email ApphubService#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#display_name ApphubService#display_name}

---

### ApphubServiceAttributesEnvironment <a name="ApphubServiceAttributesEnvironment" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesEnvironment;

ApphubServiceAttributesEnvironment.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment.property.type">type</a></code> | <code>java.lang.String</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#type ApphubService#type}

---

### ApphubServiceAttributesOperatorOwners <a name="ApphubServiceAttributesOperatorOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesOperatorOwners;

ApphubServiceAttributesOperatorOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners.property.email">email</a></code> | <code>java.lang.String</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#email ApphubService#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#display_name ApphubService#display_name}

---

### ApphubServiceConfig <a name="ApphubServiceConfig" id="@cdktn/provider-google.apphubService.ApphubServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceConfig;

ApphubServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .discoveredService(java.lang.String)
    .location(java.lang.String)
    .serviceId(java.lang.String)
//  .attributes(ApphubServiceAttributes)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ApphubServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.discoveredService">discoveredService</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the original discovered service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The Service identifier. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-defined description of a Service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined name for the Service. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#id ApphubService#id}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#project ApphubService#project}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#application_id ApphubService#application_id}

---

##### `discoveredService`<sup>Required</sup> <a name="discoveredService" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.discoveredService"></a>

```java
public java.lang.String getDiscoveredService();
```

- *Type:* java.lang.String

Immutable. The resource name of the original discovered service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#discovered_service ApphubService#discovered_service}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#location ApphubService#location}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The Service identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#service_id ApphubService#service_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.attributes"></a>

```java
public ApphubServiceAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#attributes ApphubService#attributes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#deletion_policy ApphubService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-defined description of a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#description ApphubService#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-defined name for the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#display_name ApphubService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#id ApphubService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#project ApphubService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apphubService.ApphubServiceConfig.property.timeouts"></a>

```java
public ApphubServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#timeouts ApphubService#timeouts}

---

### ApphubServiceServiceProperties <a name="ApphubServiceServiceProperties" id="@cdktn/provider-google.apphubService.ApphubServiceServiceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServiceProperties.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServiceProperties;

ApphubServiceServiceProperties.builder()
    .build();
```


### ApphubServiceServicePropertiesExtendedMetadata <a name="ApphubServiceServicePropertiesExtendedMetadata" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadata.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadata;

ApphubServiceServicePropertiesExtendedMetadata.builder()
    .build();
```


### ApphubServiceServicePropertiesExtendedMetadataValue <a name="ApphubServiceServicePropertiesExtendedMetadataValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValue.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadataValue;

ApphubServiceServicePropertiesExtendedMetadataValue.builder()
    .build();
```


### ApphubServiceServicePropertiesFunctionalType <a name="ApphubServiceServicePropertiesFunctionalType" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalType.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesFunctionalType;

ApphubServiceServicePropertiesFunctionalType.builder()
    .build();
```


### ApphubServiceServicePropertiesIdentity <a name="ApphubServiceServicePropertiesIdentity" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentity.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesIdentity;

ApphubServiceServicePropertiesIdentity.builder()
    .build();
```


### ApphubServiceServicePropertiesRegistrationType <a name="ApphubServiceServicePropertiesRegistrationType" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationType.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesRegistrationType;

ApphubServiceServicePropertiesRegistrationType.builder()
    .build();
```


### ApphubServiceServiceReference <a name="ApphubServiceServiceReference" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServiceReference;

ApphubServiceServiceReference.builder()
    .build();
```


### ApphubServiceTimeouts <a name="ApphubServiceTimeouts" id="@cdktn/provider-google.apphubService.ApphubServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apphubService.ApphubServiceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceTimeouts;

ApphubServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#create ApphubService#create}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#delete ApphubService#delete}. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#update ApphubService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#create ApphubService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#delete ApphubService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apphubService.ApphubServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apphub_service#update ApphubService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApphubServiceAttributesBusinessOwnersList <a name="ApphubServiceAttributesBusinessOwnersList" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesBusinessOwnersList;

new ApphubServiceAttributesBusinessOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.get"></a>

```java
public ApphubServiceAttributesBusinessOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesBusinessOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>>

---


### ApphubServiceAttributesBusinessOwnersOutputReference <a name="ApphubServiceAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesBusinessOwnersOutputReference;

new ApphubServiceAttributesBusinessOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApphubServiceAttributesBusinessOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>

---


### ApphubServiceAttributesCriticalityOutputReference <a name="ApphubServiceAttributesCriticalityOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesCriticalityOutputReference;

new ApphubServiceAttributesCriticalityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference.property.internalValue"></a>

```java
public ApphubServiceAttributesCriticality getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a>

---


### ApphubServiceAttributesDeveloperOwnersList <a name="ApphubServiceAttributesDeveloperOwnersList" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesDeveloperOwnersList;

new ApphubServiceAttributesDeveloperOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.get"></a>

```java
public ApphubServiceAttributesDeveloperOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesDeveloperOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>>

---


### ApphubServiceAttributesDeveloperOwnersOutputReference <a name="ApphubServiceAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesDeveloperOwnersOutputReference;

new ApphubServiceAttributesDeveloperOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApphubServiceAttributesDeveloperOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>

---


### ApphubServiceAttributesEnvironmentOutputReference <a name="ApphubServiceAttributesEnvironmentOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesEnvironmentOutputReference;

new ApphubServiceAttributesEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference.property.internalValue"></a>

```java
public ApphubServiceAttributesEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a>

---


### ApphubServiceAttributesOperatorOwnersList <a name="ApphubServiceAttributesOperatorOwnersList" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesOperatorOwnersList;

new ApphubServiceAttributesOperatorOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.get"></a>

```java
public ApphubServiceAttributesOperatorOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesOperatorOwners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>>

---


### ApphubServiceAttributesOperatorOwnersOutputReference <a name="ApphubServiceAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesOperatorOwnersOutputReference;

new ApphubServiceAttributesOperatorOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApphubServiceAttributesOperatorOwners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>

---


### ApphubServiceAttributesOutputReference <a name="ApphubServiceAttributesOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceAttributesOutputReference;

new ApphubServiceAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putBusinessOwners"></a>

```java
public void putBusinessOwners(IResolvable|java.util.List<ApphubServiceAttributesBusinessOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>>

---

##### `putCriticality` <a name="putCriticality" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putCriticality"></a>

```java
public void putCriticality(ApphubServiceAttributesCriticality value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putDeveloperOwners"></a>

```java
public void putDeveloperOwners(IResolvable|java.util.List<ApphubServiceAttributesDeveloperOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putEnvironment"></a>

```java
public void putEnvironment(ApphubServiceAttributesEnvironment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putOperatorOwners"></a>

```java
public void putOperatorOwners(IResolvable|java.util.List<ApphubServiceAttributesOperatorOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>>

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetBusinessOwners"></a>

```java
public void resetBusinessOwners()
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetCriticality"></a>

```java
public void resetCriticality()
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetDeveloperOwners"></a>

```java
public void resetDeveloperOwners()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.resetOperatorOwners"></a>

```java
public void resetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList">ApphubServiceAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference">ApphubServiceAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList">ApphubServiceAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference">ApphubServiceAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList">ApphubServiceAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.businessOwners"></a>

```java
public ApphubServiceAttributesBusinessOwnersList getBusinessOwners();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwnersList">ApphubServiceAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.criticality"></a>

```java
public ApphubServiceAttributesCriticalityOutputReference getCriticality();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticalityOutputReference">ApphubServiceAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.developerOwners"></a>

```java
public ApphubServiceAttributesDeveloperOwnersList getDeveloperOwners();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwnersList">ApphubServiceAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.environment"></a>

```java
public ApphubServiceAttributesEnvironmentOutputReference getEnvironment();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironmentOutputReference">ApphubServiceAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.operatorOwners"></a>

```java
public ApphubServiceAttributesOperatorOwnersList getOperatorOwners();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwnersList">ApphubServiceAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.businessOwnersInput"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesBusinessOwners> getBusinessOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesBusinessOwners">ApphubServiceAttributesBusinessOwners</a>>

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.criticalityInput"></a>

```java
public ApphubServiceAttributesCriticality getCriticalityInput();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesCriticality">ApphubServiceAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.developerOwnersInput"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesDeveloperOwners> getDeveloperOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesDeveloperOwners">ApphubServiceAttributesDeveloperOwners</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.environmentInput"></a>

```java
public ApphubServiceAttributesEnvironment getEnvironmentInput();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesEnvironment">ApphubServiceAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.operatorOwnersInput"></a>

```java
public IResolvable|java.util.List<ApphubServiceAttributesOperatorOwners> getOperatorOwnersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributesOperatorOwners">ApphubServiceAttributesOperatorOwners</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceAttributesOutputReference.property.internalValue"></a>

```java
public ApphubServiceAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceAttributes">ApphubServiceAttributes</a>

---


### ApphubServiceServicePropertiesExtendedMetadataList <a name="ApphubServiceServicePropertiesExtendedMetadataList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadataList;

new ApphubServiceServicePropertiesExtendedMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.get"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesExtendedMetadataOutputReference <a name="ApphubServiceServicePropertiesExtendedMetadataOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadataOutputReference;

new ApphubServiceServicePropertiesExtendedMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList">ApphubServiceServicePropertiesExtendedMetadataValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadata">ApphubServiceServicePropertiesExtendedMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.value"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadataValueList getValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList">ApphubServiceServicePropertiesExtendedMetadataValueList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataOutputReference.property.internalValue"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadata">ApphubServiceServicePropertiesExtendedMetadata</a>

---


### ApphubServiceServicePropertiesExtendedMetadataValueList <a name="ApphubServiceServicePropertiesExtendedMetadataValueList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadataValueList;

new ApphubServiceServicePropertiesExtendedMetadataValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.get"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadataValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesExtendedMetadataValueOutputReference <a name="ApphubServiceServicePropertiesExtendedMetadataValueOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference;

new ApphubServiceServicePropertiesExtendedMetadataValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema">extendedMetadataSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.metadataStruct">metadataStruct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValue">ApphubServiceServicePropertiesExtendedMetadataValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendedMetadataSchema`<sup>Required</sup> <a name="extendedMetadataSchema" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema"></a>

```java
public java.lang.String getExtendedMetadataSchema();
```

- *Type:* java.lang.String

---

##### `metadataStruct`<sup>Required</sup> <a name="metadataStruct" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.metadataStruct"></a>

```java
public java.lang.String getMetadataStruct();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.internalValue"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadataValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataValue">ApphubServiceServicePropertiesExtendedMetadataValue</a>

---


### ApphubServiceServicePropertiesFunctionalTypeList <a name="ApphubServiceServicePropertiesFunctionalTypeList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesFunctionalTypeList;

new ApphubServiceServicePropertiesFunctionalTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.get"></a>

```java
public ApphubServiceServicePropertiesFunctionalTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesFunctionalTypeOutputReference <a name="ApphubServiceServicePropertiesFunctionalTypeOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesFunctionalTypeOutputReference;

new ApphubServiceServicePropertiesFunctionalTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalType">ApphubServiceServicePropertiesFunctionalType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeOutputReference.property.internalValue"></a>

```java
public ApphubServiceServicePropertiesFunctionalType getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalType">ApphubServiceServicePropertiesFunctionalType</a>

---


### ApphubServiceServicePropertiesIdentityList <a name="ApphubServiceServicePropertiesIdentityList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesIdentityList;

new ApphubServiceServicePropertiesIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.get"></a>

```java
public ApphubServiceServicePropertiesIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesIdentityOutputReference <a name="ApphubServiceServicePropertiesIdentityOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesIdentityOutputReference;

new ApphubServiceServicePropertiesIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentity">ApphubServiceServicePropertiesIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityOutputReference.property.internalValue"></a>

```java
public ApphubServiceServicePropertiesIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentity">ApphubServiceServicePropertiesIdentity</a>

---


### ApphubServiceServicePropertiesList <a name="ApphubServiceServicePropertiesList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesList;

new ApphubServiceServicePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.get"></a>

```java
public ApphubServiceServicePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesOutputReference <a name="ApphubServiceServicePropertiesOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesOutputReference;

new ApphubServiceServicePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.extendedMetadata">extendedMetadata</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList">ApphubServiceServicePropertiesExtendedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.functionalType">functionalType</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList">ApphubServiceServicePropertiesFunctionalTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList">ApphubServiceServicePropertiesIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.registrationType">registrationType</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList">ApphubServiceServicePropertiesRegistrationTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceProperties">ApphubServiceServiceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendedMetadata`<sup>Required</sup> <a name="extendedMetadata" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.extendedMetadata"></a>

```java
public ApphubServiceServicePropertiesExtendedMetadataList getExtendedMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesExtendedMetadataList">ApphubServiceServicePropertiesExtendedMetadataList</a>

---

##### `functionalType`<sup>Required</sup> <a name="functionalType" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.functionalType"></a>

```java
public ApphubServiceServicePropertiesFunctionalTypeList getFunctionalType();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesFunctionalTypeList">ApphubServiceServicePropertiesFunctionalTypeList</a>

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.identity"></a>

```java
public ApphubServiceServicePropertiesIdentityList getIdentity();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesIdentityList">ApphubServiceServicePropertiesIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `registrationType`<sup>Required</sup> <a name="registrationType" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.registrationType"></a>

```java
public ApphubServiceServicePropertiesRegistrationTypeList getRegistrationType();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList">ApphubServiceServicePropertiesRegistrationTypeList</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesOutputReference.property.internalValue"></a>

```java
public ApphubServiceServiceProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceProperties">ApphubServiceServiceProperties</a>

---


### ApphubServiceServicePropertiesRegistrationTypeList <a name="ApphubServiceServicePropertiesRegistrationTypeList" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesRegistrationTypeList;

new ApphubServiceServicePropertiesRegistrationTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.get"></a>

```java
public ApphubServiceServicePropertiesRegistrationTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServicePropertiesRegistrationTypeOutputReference <a name="ApphubServiceServicePropertiesRegistrationTypeOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServicePropertiesRegistrationTypeOutputReference;

new ApphubServiceServicePropertiesRegistrationTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationType">ApphubServiceServicePropertiesRegistrationType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationTypeOutputReference.property.internalValue"></a>

```java
public ApphubServiceServicePropertiesRegistrationType getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServicePropertiesRegistrationType">ApphubServiceServicePropertiesRegistrationType</a>

---


### ApphubServiceServiceReferenceList <a name="ApphubServiceServiceReferenceList" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServiceReferenceList;

new ApphubServiceServiceReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.get"></a>

```java
public ApphubServiceServiceReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApphubServiceServiceReferenceOutputReference <a name="ApphubServiceServiceReferenceOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceServiceReferenceOutputReference;

new ApphubServiceServiceReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReference">ApphubServiceServiceReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceServiceReferenceOutputReference.property.internalValue"></a>

```java
public ApphubServiceServiceReference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.apphubService.ApphubServiceServiceReference">ApphubServiceServiceReference</a>

---


### ApphubServiceTimeoutsOutputReference <a name="ApphubServiceTimeoutsOutputReference" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.apphub_service.ApphubServiceTimeoutsOutputReference;

new ApphubServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apphubService.ApphubServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApphubServiceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.apphubService.ApphubServiceTimeouts">ApphubServiceTimeouts</a>

---




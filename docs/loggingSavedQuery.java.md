# `loggingSavedQuery` Submodule <a name="`loggingSavedQuery` Submodule" id="@cdktn/provider-google.loggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingSavedQuery <a name="LoggingSavedQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQuery;

LoggingSavedQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
    .visibility(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingQuery(LoggingSavedQueryLoggingQuery)
//  .opsAnalyticsQuery(LoggingSavedQueryOpsAnalyticsQuery)
//  .timeouts(LoggingSavedQueryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.loggingQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery">putLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery">putOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery">resetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery">resetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingQuery` <a name="putLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery"></a>

```java
public void putLoggingQuery(LoggingSavedQueryLoggingQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `putOpsAnalyticsQuery` <a name="putOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery"></a>

```java
public void putOpsAnalyticsQuery(LoggingSavedQueryOpsAnalyticsQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts"></a>

```java
public void putTimeouts(LoggingSavedQueryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingQuery` <a name="resetLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery"></a>

```java
public void resetLoggingQuery()
```

##### `resetOpsAnalyticsQuery` <a name="resetOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```java
public void resetOpsAnalyticsQuery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQuery;

LoggingSavedQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQuery;

LoggingSavedQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQuery;

LoggingSavedQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQuery;

LoggingSavedQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoggingSavedQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoggingSavedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput">loggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput">opsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `loggingQuery`<sup>Required</sup> <a name="loggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery"></a>

```java
public LoggingSavedQueryLoggingQueryOutputReference getLoggingQuery();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `opsAnalyticsQuery`<sup>Required</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery"></a>

```java
public LoggingSavedQueryOpsAnalyticsQueryOutputReference getOpsAnalyticsQuery();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts"></a>

```java
public LoggingSavedQueryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingQueryInput`<sup>Optional</sup> <a name="loggingQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput"></a>

```java
public LoggingSavedQueryLoggingQuery getLoggingQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opsAnalyticsQueryInput`<sup>Optional</sup> <a name="opsAnalyticsQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```java
public LoggingSavedQueryOpsAnalyticsQuery getOpsAnalyticsQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput"></a>

```java
public IResolvable|LoggingSavedQueryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingSavedQueryConfig <a name="LoggingSavedQueryConfig" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryConfig;

LoggingSavedQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
    .visibility(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingQuery(LoggingSavedQueryLoggingQuery)
//  .opsAnalyticsQuery(LoggingSavedQueryOpsAnalyticsQuery)
//  .timeouts(LoggingSavedQueryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery"></a>

```java
public LoggingSavedQueryLoggingQuery getLoggingQuery();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```java
public LoggingSavedQueryOpsAnalyticsQuery getOpsAnalyticsQuery();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts"></a>

```java
public LoggingSavedQueryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

### LoggingSavedQueryLoggingQuery <a name="LoggingSavedQueryLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryLoggingQuery;

LoggingSavedQueryLoggingQuery.builder()
    .filter(java.lang.String)
//  .summaryFieldEnd(java.lang.Number)
//  .summaryFields(IResolvable|java.util.List<LoggingSavedQueryLoggingQuerySummaryFields>)
//  .summaryFieldStart(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>java.lang.String</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>java.lang.Number</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields">summaryFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>></code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart">summaryFieldStart</a></code> | <code>java.lang.Number</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}

---

##### `summaryFieldEnd`<sup>Optional</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```java
public java.lang.Number getSummaryFieldEnd();
```

- *Type:* java.lang.Number

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}

---

##### `summaryFields`<sup>Optional</sup> <a name="summaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```java
public IResolvable|java.util.List<LoggingSavedQueryLoggingQuerySummaryFields> getSummaryFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>>

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}

---

##### `summaryFieldStart`<sup>Optional</sup> <a name="summaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```java
public java.lang.Number getSummaryFieldStart();
```

- *Type:* java.lang.Number

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}

---

### LoggingSavedQueryLoggingQuerySummaryFields <a name="LoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryLoggingQuerySummaryFields;

LoggingSavedQueryLoggingQuerySummaryFields.builder()
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>java.lang.String</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#field LoggingSavedQuery#field}

---

### LoggingSavedQueryOpsAnalyticsQuery <a name="LoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryOpsAnalyticsQuery;

LoggingSavedQueryOpsAnalyticsQuery.builder()
    .sqlQueryText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sqlQueryText</a></code> | <code>java.lang.String</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```java
public java.lang.String getSqlQueryText();
```

- *Type:* java.lang.String

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}

---

### LoggingSavedQueryTimeouts <a name="LoggingSavedQueryTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryTimeouts;

LoggingSavedQueryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingSavedQueryLoggingQueryOutputReference <a name="LoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryLoggingQueryOutputReference;

new LoggingSavedQueryLoggingQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">putSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">resetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">resetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">resetSummaryFieldStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummaryFields` <a name="putSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```java
public void putSummaryFields(IResolvable|java.util.List<LoggingSavedQueryLoggingQuerySummaryFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>>

---

##### `resetSummaryFieldEnd` <a name="resetSummaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```java
public void resetSummaryFieldEnd()
```

##### `resetSummaryFields` <a name="resetSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```java
public void resetSummaryFields()
```

##### `resetSummaryFieldStart` <a name="resetSummaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```java
public void resetSummaryFieldStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summaryFields</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summaryFieldEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summaryFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summaryFieldStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summaryFieldStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `summaryFields`<sup>Required</sup> <a name="summaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```java
public LoggingSavedQueryLoggingQuerySummaryFieldsList getSummaryFields();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `summaryFieldEndInput`<sup>Optional</sup> <a name="summaryFieldEndInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```java
public java.lang.Number getSummaryFieldEndInput();
```

- *Type:* java.lang.Number

---

##### `summaryFieldsInput`<sup>Optional</sup> <a name="summaryFieldsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```java
public IResolvable|java.util.List<LoggingSavedQueryLoggingQuerySummaryFields> getSummaryFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>>

---

##### `summaryFieldStartInput`<sup>Optional</sup> <a name="summaryFieldStartInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```java
public java.lang.Number getSummaryFieldStartInput();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `summaryFieldEnd`<sup>Required</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```java
public java.lang.Number getSummaryFieldEnd();
```

- *Type:* java.lang.Number

---

##### `summaryFieldStart`<sup>Required</sup> <a name="summaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```java
public java.lang.Number getSummaryFieldStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```java
public LoggingSavedQueryLoggingQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---


### LoggingSavedQueryLoggingQuerySummaryFieldsList <a name="LoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryLoggingQuerySummaryFieldsList;

new LoggingSavedQueryLoggingQuerySummaryFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```java
public LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LoggingSavedQueryLoggingQuerySummaryFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>>

---


### LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference;

new LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|LoggingSavedQueryLoggingQuerySummaryFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>

---


### LoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="LoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryOpsAnalyticsQueryOutputReference;

new LoggingSavedQueryOpsAnalyticsQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sqlQueryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sqlQueryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sqlQueryTextInput`<sup>Optional</sup> <a name="sqlQueryTextInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```java
public java.lang.String getSqlQueryTextInput();
```

- *Type:* java.lang.String

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```java
public java.lang.String getSqlQueryText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```java
public LoggingSavedQueryOpsAnalyticsQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---


### LoggingSavedQueryTimeoutsOutputReference <a name="LoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.logging_saved_query.LoggingSavedQueryTimeoutsOutputReference;

new LoggingSavedQueryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LoggingSavedQueryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---




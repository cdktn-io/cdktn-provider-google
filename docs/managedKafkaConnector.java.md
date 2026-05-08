# `managedKafkaConnector` Submodule <a name="`managedKafkaConnector` Submodule" id="@cdktn/provider-google.managedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnector <a name="ManagedKafkaConnector" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnector;

ManagedKafkaConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectCluster(java.lang.String)
    .connectorId(java.lang.String)
    .location(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .taskRestartPolicy(ManagedKafkaConnectorTaskRestartPolicy)
//  .timeouts(ManagedKafkaConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectorId">connectorId</a></code> | <code>java.lang.String</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectCluster"></a>

- *Type:* java.lang.String

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.connectorId"></a>

- *Type:* java.lang.String

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.configs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.taskRestartPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy">putTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy">resetTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTaskRestartPolicy` <a name="putTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy"></a>

```java
public void putTaskRestartPolicy(ManagedKafkaConnectorTaskRestartPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts"></a>

```java
public void putTimeouts(ManagedKafkaConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetTaskRestartPolicy` <a name="resetTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy"></a>

```java
public void resetTaskRestartPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnector;

ManagedKafkaConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnector;

ManagedKafkaConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnector;

ManagedKafkaConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnector;

ManagedKafkaConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedKafkaConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedKafkaConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput">configsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput">connectClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput">connectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput">taskRestartPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `taskRestartPolicy`<sup>Required</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy"></a>

```java
public ManagedKafkaConnectorTaskRestartPolicyOutputReference getTaskRestartPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts"></a>

```java
public ManagedKafkaConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectClusterInput`<sup>Optional</sup> <a name="connectClusterInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput"></a>

```java
public java.lang.String getConnectClusterInput();
```

- *Type:* java.lang.String

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput"></a>

```java
public java.lang.String getConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `taskRestartPolicyInput`<sup>Optional</sup> <a name="taskRestartPolicyInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```java
public ManagedKafkaConnectorTaskRestartPolicy getTaskRestartPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput"></a>

```java
public IResolvable|ManagedKafkaConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster"></a>

```java
public java.lang.String getConnectCluster();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectorConfig <a name="ManagedKafkaConnectorConfig" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnectorConfig;

ManagedKafkaConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectCluster(java.lang.String)
    .connectorId(java.lang.String)
    .location(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .taskRestartPolicy(ManagedKafkaConnectorTaskRestartPolicy)
//  .timeouts(ManagedKafkaConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster">connectCluster</a></code> | <code>java.lang.String</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster"></a>

```java
public java.lang.String getConnectCluster();
```

- *Type:* java.lang.String

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```java
public ManagedKafkaConnectorTaskRestartPolicy getTaskRestartPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts"></a>

```java
public ManagedKafkaConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

### ManagedKafkaConnectorTaskRestartPolicy <a name="ManagedKafkaConnectorTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnectorTaskRestartPolicy;

ManagedKafkaConnectorTaskRestartPolicy.builder()
//  .maximumBackoff(java.lang.String)
//  .minimumBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}

---

### ManagedKafkaConnectorTimeouts <a name="ManagedKafkaConnectorTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnectorTimeouts;

ManagedKafkaConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="ManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnectorTaskRestartPolicyOutputReference;

new ManagedKafkaConnectorTaskRestartPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```java
public void resetMaximumBackoff()
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```java
public void resetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```java
public java.lang.String getMaximumBackoffInput();
```

- *Type:* java.lang.String

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```java
public java.lang.String getMinimumBackoffInput();
```

- *Type:* java.lang.String

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```java
public ManagedKafkaConnectorTaskRestartPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---


### ManagedKafkaConnectorTimeoutsOutputReference <a name="ManagedKafkaConnectorTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.managed_kafka_connector.ManagedKafkaConnectorTimeoutsOutputReference;

new ManagedKafkaConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ManagedKafkaConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---




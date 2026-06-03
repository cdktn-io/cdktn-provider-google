# `managedKafkaConnectCluster` Submodule <a name="`managedKafkaConnectCluster` Submodule" id="@cdktn/provider-google.managedKafkaConnectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnectCluster <a name="ManagedKafkaConnectCluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster google_managed_kafka_connect_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectCluster(Construct Scope, string Id, ManagedKafkaConnectClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig">ManagedKafkaConnectClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig">ManagedKafkaConnectClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig">PutCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig">PutGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityConfig` <a name="PutCapacityConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig"></a>

```csharp
private void PutCapacityConfig(ManagedKafkaConnectClusterCapacityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

---

##### `PutGcpConfig` <a name="PutGcpConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig"></a>

```csharp
private void PutGcpConfig(ManagedKafkaConnectClusterGcpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagedKafkaConnectClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaConnectCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaConnectCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaConnectCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaConnectCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ManagedKafkaConnectCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ManagedKafkaConnectCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaConnectCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaConnectCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnectCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference">ManagedKafkaConnectClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference">ManagedKafkaConnectClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference">ManagedKafkaConnectClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfigInput">CapacityConfigInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterIdInput">ConnectClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfigInput">GcpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterId">ConnectClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaCluster">KafkaCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfig"></a>

```csharp
public ManagedKafkaConnectClusterCapacityConfigOutputReference CapacityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference">ManagedKafkaConnectClusterCapacityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfig"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigOutputReference GcpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference">ManagedKafkaConnectClusterGcpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeouts"></a>

```csharp
public ManagedKafkaConnectClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference">ManagedKafkaConnectClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CapacityConfigInput`<sup>Optional</sup> <a name="CapacityConfigInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.capacityConfigInput"></a>

```csharp
public ManagedKafkaConnectClusterCapacityConfig CapacityConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

---

##### `ConnectClusterIdInput`<sup>Optional</sup> <a name="ConnectClusterIdInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterIdInput"></a>

```csharp
public string ConnectClusterIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GcpConfigInput`<sup>Optional</sup> <a name="GcpConfigInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.gcpConfigInput"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfig GcpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaClusterInput"></a>

```csharp
public string KafkaClusterInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

---

##### `ConnectClusterId`<sup>Required</sup> <a name="ConnectClusterId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.connectClusterId"></a>

```csharp
public string ConnectClusterId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.kafkaCluster"></a>

```csharp
public string KafkaCluster { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectClusterCapacityConfig <a name="ManagedKafkaConnectClusterCapacityConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterCapacityConfig {
    string MemoryBytes,
    string VcpuCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.memoryBytes">MemoryBytes</a></code> | <code>string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.vcpuCount">VcpuCount</a></code> | <code>string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.memoryBytes"></a>

```csharp
public string MemoryBytes { get; set; }
```

- *Type:* string

The memory to provision for the cluster in bytes.

The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#memory_bytes ManagedKafkaConnectCluster#memory_bytes}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig.property.vcpuCount"></a>

```csharp
public string VcpuCount { get; set; }
```

- *Type:* string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#vcpu_count ManagedKafkaConnectCluster#vcpu_count}

---

### ManagedKafkaConnectClusterConfig <a name="ManagedKafkaConnectClusterConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ManagedKafkaConnectClusterCapacityConfig CapacityConfig,
    string ConnectClusterId,
    ManagedKafkaConnectClusterGcpConfig GcpConfig,
    string KafkaCluster,
    string Location,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    ManagedKafkaConnectClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connectClusterId">ConnectClusterId</a></code> | <code>string</code> | The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.kafkaCluster">KafkaCluster</a></code> | <code>string</code> | The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.location">Location</a></code> | <code>string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.capacityConfig"></a>

```csharp
public ManagedKafkaConnectClusterCapacityConfig CapacityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#capacity_config ManagedKafkaConnectCluster#capacity_config}

---

##### `ConnectClusterId`<sup>Required</sup> <a name="ConnectClusterId" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.connectClusterId"></a>

```csharp
public string ConnectClusterId { get; set; }
```

- *Type:* string

The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name.

This value is structured like: 'my-connect-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#connect_cluster_id ManagedKafkaConnectCluster#connect_cluster_id}

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.gcpConfig"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfig GcpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#gcp_config ManagedKafkaConnectCluster#gcp_config}

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.kafkaCluster"></a>

```csharp
public string KafkaCluster { get; set; }
```

- *Type:* string

The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#kafka_cluster ManagedKafkaConnectCluster#kafka_cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#location ManagedKafkaConnectCluster#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#deletion_policy ManagedKafkaConnectCluster#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#id ManagedKafkaConnectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#labels ManagedKafkaConnectCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#project ManagedKafkaConnectCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterConfig.property.timeouts"></a>

```csharp
public ManagedKafkaConnectClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#timeouts ManagedKafkaConnectCluster#timeouts}

---

### ManagedKafkaConnectClusterGcpConfig <a name="ManagedKafkaConnectClusterGcpConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfig {
    ManagedKafkaConnectClusterGcpConfigAccessConfig AccessConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | access_config block. |

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig.property.accessConfig"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigAccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#access_config ManagedKafkaConnectCluster#access_config}

---

### ManagedKafkaConnectClusterGcpConfigAccessConfig <a name="ManagedKafkaConnectClusterGcpConfigAccessConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigAccessConfig {
    IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] NetworkConfigs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs">NetworkConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | network_configs block. |

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] NetworkConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#network_configs ManagedKafkaConnectCluster#network_configs}

---

### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs {
    string PrimarySubnet,
    string[] AdditionalSubnets = null,
    string[] DnsDomainNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet">PrimarySubnet</a></code> | <code>string</code> | VPC subnet to make available to the Kafka Connect cluster. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets">AdditionalSubnets</a></code> | <code>string[]</code> | Additional subnets may be specified. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames">DnsDomainNames</a></code> | <code>string[]</code> | Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. |

---

##### `PrimarySubnet`<sup>Required</sup> <a name="PrimarySubnet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet"></a>

```csharp
public string PrimarySubnet { get; set; }
```

- *Type:* string

VPC subnet to make available to the Kafka Connect cluster.

Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#primary_subnet ManagedKafkaConnectCluster#primary_subnet}

---

##### `AdditionalSubnets`<sup>Optional</sup> <a name="AdditionalSubnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets"></a>

```csharp
public string[] AdditionalSubnets { get; set; }
```

- *Type:* string[]

Additional subnets may be specified.

They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#additional_subnets ManagedKafkaConnectCluster#additional_subnets}

---

##### `DnsDomainNames`<sup>Optional</sup> <a name="DnsDomainNames" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames"></a>

```csharp
public string[] DnsDomainNames { get; set; }
```

- *Type:* string[]

Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.

When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#dns_domain_names ManagedKafkaConnectCluster#dns_domain_names}

---

### ManagedKafkaConnectClusterTimeouts <a name="ManagedKafkaConnectClusterTimeouts" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#create ManagedKafkaConnectCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#delete ManagedKafkaConnectCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/managed_kafka_connect_cluster#update ManagedKafkaConnectCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectClusterCapacityConfigOutputReference <a name="ManagedKafkaConnectClusterCapacityConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterCapacityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount">VcpuCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```csharp
public string MemoryBytesInput { get; }
```

- *Type:* string

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```csharp
public string VcpuCountInput { get; }
```

- *Type:* string

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```csharp
public string MemoryBytes { get; }
```

- *Type:* string

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```csharp
public string VcpuCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue"></a>

```csharp
public ManagedKafkaConnectClusterCapacityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterCapacityConfig">ManagedKafkaConnectClusterCapacityConfig</a>

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```csharp
private ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets">ResetAdditionalSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames">ResetDnsDomainNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalSubnets` <a name="ResetAdditionalSubnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets"></a>

```csharp
private void ResetAdditionalSubnets()
```

##### `ResetDnsDomainNames` <a name="ResetDnsDomainNames" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames"></a>

```csharp
private void ResetDnsDomainNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput">AdditionalSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput">DnsDomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput">PrimarySubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets">AdditionalSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames">DnsDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet">PrimarySubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalSubnetsInput`<sup>Optional</sup> <a name="AdditionalSubnetsInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput"></a>

```csharp
public string[] AdditionalSubnetsInput { get; }
```

- *Type:* string[]

---

##### `DnsDomainNamesInput`<sup>Optional</sup> <a name="DnsDomainNamesInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput"></a>

```csharp
public string[] DnsDomainNamesInput { get; }
```

- *Type:* string[]

---

##### `PrimarySubnetInput`<sup>Optional</sup> <a name="PrimarySubnetInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput"></a>

```csharp
public string PrimarySubnetInput { get; }
```

- *Type:* string

---

##### `AdditionalSubnets`<sup>Required</sup> <a name="AdditionalSubnets" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets"></a>

```csharp
public string[] AdditionalSubnets { get; }
```

- *Type:* string[]

---

##### `DnsDomainNames`<sup>Required</sup> <a name="DnsDomainNames" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames"></a>

```csharp
public string[] DnsDomainNames { get; }
```

- *Type:* string[]

---

##### `PrimarySubnet`<sup>Required</sup> <a name="PrimarySubnet" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet"></a>

```csharp
public string PrimarySubnet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>

---


### ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference <a name="ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">PutNetworkConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkConfigs` <a name="PutNetworkConfigs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```csharp
private void PutNetworkConfigs(IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">NetworkConfigs</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">NetworkConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList NetworkConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `NetworkConfigsInput`<sup>Optional</sup> <a name="NetworkConfigsInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[] NetworkConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">ManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


### ManagedKafkaConnectClusterGcpConfigOutputReference <a name="ManagedKafkaConnectClusterGcpConfigOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterGcpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig"></a>

```csharp
private void PutAccessConfig(ManagedKafkaConnectClusterGcpConfigAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">ManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfigAccessConfig AccessConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigAccessConfig">ManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue"></a>

```csharp
public ManagedKafkaConnectClusterGcpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterGcpConfig">ManagedKafkaConnectClusterGcpConfig</a>

---


### ManagedKafkaConnectClusterTimeoutsOutputReference <a name="ManagedKafkaConnectClusterTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ManagedKafkaConnectClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedKafkaConnectClusterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.managedKafkaConnectCluster.ManagedKafkaConnectClusterTimeouts">ManagedKafkaConnectClusterTimeouts</a>

---




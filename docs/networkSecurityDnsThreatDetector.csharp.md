# `networkSecurityDnsThreatDetector` Submodule <a name="`networkSecurityDnsThreatDetector` Submodule" id="@cdktn/provider-google.networkSecurityDnsThreatDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityDnsThreatDetector <a name="NetworkSecurityDnsThreatDetector" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector google_network_security_dns_threat_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityDnsThreatDetector(Construct Scope, string Id, NetworkSecurityDnsThreatDetectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig">NetworkSecurityDnsThreatDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig">NetworkSecurityDnsThreatDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetExcludedNetworks">ResetExcludedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetThreatDetectorProvider">ResetThreatDetectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityDnsThreatDetectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetExcludedNetworks` <a name="ResetExcludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetExcludedNetworks"></a>

```csharp
private void ResetExcludedNetworks()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetThreatDetectorProvider` <a name="ResetThreatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetThreatDetectorProvider"></a>

```csharp
private void ResetThreatDetectorProvider()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityDnsThreatDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityDnsThreatDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityDnsThreatDetector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityDnsThreatDetector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityDnsThreatDetector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityDnsThreatDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityDnsThreatDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference">NetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworksInput">ExcludedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput">ThreatDetectorProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworks">ExcludedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProvider">ThreatDetectorProvider</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeouts"></a>

```csharp
public NetworkSecurityDnsThreatDetectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference">NetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `ExcludedNetworksInput`<sup>Optional</sup> <a name="ExcludedNetworksInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworksInput"></a>

```csharp
public string[] ExcludedNetworksInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ThreatDetectorProviderInput`<sup>Optional</sup> <a name="ThreatDetectorProviderInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput"></a>

```csharp
public string ThreatDetectorProviderInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkSecurityDnsThreatDetectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `ExcludedNetworks`<sup>Required</sup> <a name="ExcludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworks"></a>

```csharp
public string[] ExcludedNetworks { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ThreatDetectorProvider`<sup>Required</sup> <a name="ThreatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProvider"></a>

```csharp
public string ThreatDetectorProvider { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityDnsThreatDetectorConfig <a name="NetworkSecurityDnsThreatDetectorConfig" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityDnsThreatDetectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string DeletionPolicy = null,
    string[] ExcludedNetworks = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    string ThreatDetectorProvider = null,
    NetworkSecurityDnsThreatDetectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.name">Name</a></code> | <code>string</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks">ExcludedNetworks</a></code> | <code>string[]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#id NetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.location">Location</a></code> | <code>string</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#project NetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider">ThreatDetectorProvider</a></code> | <code>string</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#name NetworkSecurityDnsThreatDetector#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#deletion_policy NetworkSecurityDnsThreatDetector#deletion_policy}

---

##### `ExcludedNetworks`<sup>Optional</sup> <a name="ExcludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks"></a>

```csharp
public string[] ExcludedNetworks { get; set; }
```

- *Type:* string[]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#excluded_networks NetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#id NetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#labels NetworkSecurityDnsThreatDetector#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#location NetworkSecurityDnsThreatDetector#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#project NetworkSecurityDnsThreatDetector#project}.

---

##### `ThreatDetectorProvider`<sup>Optional</sup> <a name="ThreatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider"></a>

```csharp
public string ThreatDetectorProvider { get; set; }
```

- *Type:* string

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#threat_detector_provider NetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.timeouts"></a>

```csharp
public NetworkSecurityDnsThreatDetectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#timeouts NetworkSecurityDnsThreatDetector#timeouts}

---

### NetworkSecurityDnsThreatDetectorTimeouts <a name="NetworkSecurityDnsThreatDetectorTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityDnsThreatDetectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#create NetworkSecurityDnsThreatDetector#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#delete NetworkSecurityDnsThreatDetector#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#update NetworkSecurityDnsThreatDetector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#create NetworkSecurityDnsThreatDetector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#delete NetworkSecurityDnsThreatDetector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_security_dns_threat_detector#update NetworkSecurityDnsThreatDetector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityDnsThreatDetectorTimeoutsOutputReference <a name="NetworkSecurityDnsThreatDetectorTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityDnsThreatDetectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkSecurityDnsThreatDetectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---




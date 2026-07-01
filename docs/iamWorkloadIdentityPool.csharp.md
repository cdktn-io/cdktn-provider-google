# `iamWorkloadIdentityPool` Submodule <a name="`iamWorkloadIdentityPool` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPool <a name="IamWorkloadIdentityPool" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPool(Construct Scope, string Id, IamWorkloadIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules">PutAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig">PutInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig">PutInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules">ResetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig">ResetInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig">ResetInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationRules` <a name="PutAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules"></a>

```csharp
private void PutAttestationRules(IResolvable|IamWorkloadIdentityPoolAttestationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---

##### `PutInlineCertificateIssuanceConfig` <a name="PutInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig"></a>

```csharp
private void PutInlineCertificateIssuanceConfig(IamWorkloadIdentityPoolInlineCertificateIssuanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `PutInlineTrustConfig` <a name="PutInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig"></a>

```csharp
private void PutInlineTrustConfig(IamWorkloadIdentityPoolInlineTrustConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkloadIdentityPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `ResetAttestationRules` <a name="ResetAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules"></a>

```csharp
private void ResetAttestationRules()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInlineCertificateIssuanceConfig` <a name="ResetInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig"></a>

```csharp
private void ResetInlineCertificateIssuanceConfig()
```

##### `ResetInlineTrustConfig` <a name="ResetInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig"></a>

```csharp
private void ResetInlineTrustConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput">AttestationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput">InlineCertificateIssuanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput">InlineTrustConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules"></a>

```csharp
public IamWorkloadIdentityPoolAttestationRulesList AttestationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a>

---

##### `InlineCertificateIssuanceConfig`<sup>Required</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```csharp
public IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference InlineCertificateIssuanceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a>

---

##### `InlineTrustConfig`<sup>Required</sup> <a name="InlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfigOutputReference InlineTrustConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `AttestationRulesInput`<sup>Optional</sup> <a name="AttestationRulesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolAttestationRules[] AttestationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InlineCertificateIssuanceConfigInput`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput"></a>

```csharp
public IamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `InlineTrustConfigInput`<sup>Optional</sup> <a name="InlineTrustConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolAttestationRules <a name="IamWorkloadIdentityPoolAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolAttestationRules {
    string GoogleCloudResource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'. |

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; set; }
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#google_cloud_resource IamWorkloadIdentityPool#google_cloud_resource}

---

### IamWorkloadIdentityPoolConfig <a name="IamWorkloadIdentityPoolConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WorkloadIdentityPoolId,
    IResolvable|IamWorkloadIdentityPoolAttestationRules[] AttestationRules = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable Disabled = null,
    string DisplayName = null,
    string Id = null,
    IamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfig = null,
    IamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfig = null,
    string Mode = null,
    string Project = null,
    IamWorkloadIdentityPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules">AttestationRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description">Description</a></code> | <code>string</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the pool is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig">InlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | inline_certificate_issuance_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig">InlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | inline_trust_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode">Mode</a></code> | <code>string</code> | The mode for the pool is operating in. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `AttestationRules`<sup>Optional</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolAttestationRules[] AttestationRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#attestation_rules IamWorkloadIdentityPool#attestation_rules}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#deletion_policy IamWorkloadIdentityPool#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InlineCertificateIssuanceConfig`<sup>Optional</sup> <a name="InlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig"></a>

```csharp
public IamWorkloadIdentityPoolInlineCertificateIssuanceConfig InlineCertificateIssuanceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

inline_certificate_issuance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#inline_certificate_issuance_config IamWorkloadIdentityPool#inline_certificate_issuance_config}

---

##### `InlineTrustConfig`<sup>Optional</sup> <a name="InlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfig InlineTrustConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

inline_trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#inline_trust_config IamWorkloadIdentityPool#inline_trust_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode for the pool is operating in.

Pools with an unspecified mode will operate as if they
are in 'FEDERATION_ONLY' mode.

~> **Note** This field cannot be changed after the Workload Identity Pool is created. While
'terraform plan' may show an update if you change this field's value, 'terraform apply'
**will fail with an API error** (such as 'Error 400: Attempted to update an immutable field.').
To specify a different 'mode', please create a new Workload Identity Pool resource.

* 'FEDERATION_ONLY': Pools can only be used for federating external workload identities into
  Google Cloud. Unless otherwise noted, no structure or format constraints are applied to
  workload identities in a 'FEDERATION_ONLY' mode pool, and you may not create any resources
  within the pool besides providers.
* 'TRUST_DOMAIN': Pools can be used to assign identities to Google Cloud workloads. All
  identities within a 'TRUST_DOMAIN' mode pool must consist of a single namespace and individual
  workload identifier. The subject identifier for all identities must conform to the following
  format: 'ns/<namespace>/sa/<workload_identifier>'.
  'google_iam_workload_identity_pool_provider's cannot be created within 'TRUST_DOMAIN'
  mode pools.
* 'SYSTEM_TRUST_DOMAIN': Pools are managed by Google Cloud services. Neither
  'google_iam_workload_identity_pool_namespace's nor 'google_iam_workload_identity_pool_provider's
  can be created within 'SYSTEM_TRUST_DOMAIN' mode pools. All identities within a
  'SYSTEM_TRUST_DOMAIN' mode pool are in one of the following formats:

  * 'spiffe://<trust-domain>/ns/<kubernetes-namespace>/sa/<kubernetes-service-account>'
  * 'spiffe://<trust-domain>/resources/<resource-scope>/<resource-name>' Possible values: ["FEDERATION_ONLY", "TRUST_DOMAIN", "SYSTEM_TRUST_DOMAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#mode IamWorkloadIdentityPool#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

### IamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineCertificateIssuanceConfig {
    System.Collections.Generic.IDictionary<string, string> CaPools = null,
    string KeyAlgorithm = null,
    string Lifetime = null,
    double RotationWindowPercentage = null,
    bool|IResolvable UseDefaultSharedCa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools">CaPools</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the key pair. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Lifetime of the workload certificates issued by the CA pool in seconds. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa">UseDefaultSharedCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the trust domain will utilize the GCP-provisioned default CA. |

---

##### `CaPools`<sup>Optional</sup> <a name="CaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPools { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value.

* **Value format:** A valid CA pool resource path format like:
  'projects/{project}/locations/{location}/caPools/{ca_pool}'
* **Region Matching:** Workloads are ONLY issued certificates from CA pools within the
  same region. Also the CA pool region (in value) must match the workload's region (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#ca_pools IamWorkloadIdentityPool#ca_pools}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Key algorithm to use when generating the key pair.

This key pair will be used to create
the certificate. If unspecified, this will default to 'ECDSA_P256'.

* 'RSA_2048': Specifies RSA with a 2048-bit modulus.
* 'RSA_3072': Specifies RSA with a 3072-bit modulus.
* 'RSA_4096': Specifies RSA with a 4096-bit modulus.
* 'ECDSA_P256': Specifies ECDSA with curve P256.
* 'ECDSA_P384': Specifies ECDSA with curve P384. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096", "ECDSA_P256", "ECDSA_P384"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#key_algorithm IamWorkloadIdentityPool#key_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Lifetime of the workload certificates issued by the CA pool in seconds.

Must be between
'86400s' (24 hours) to '2592000s' (30 days), ends in the suffix "'s'" (indicating seconds)
and is preceded by the number of seconds. If unspecified, this will be defaulted to
'86400s' (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#lifetime IamWorkloadIdentityPool#lifetime}

---

##### `RotationWindowPercentage`<sup>Optional</sup> <a name="RotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; set; }
```

- *Type:* double

Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime.

Must be between '50' - '80'. If unspecified, this will be defaulted
to '50'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#rotation_window_percentage IamWorkloadIdentityPool#rotation_window_percentage}

---

##### `UseDefaultSharedCa`<sup>Optional</sup> <a name="UseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa"></a>

```csharp
public bool|IResolvable UseDefaultSharedCa { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the trust domain will utilize the GCP-provisioned default CA.

A default
CA in the same region as the workload will be selected to issue the certificate. Enabling
this will clear any existing 'ca_pools' configuration to provision the certificates.

~> **Note** This field is mutually exclusive with 'ca_pools'. If this flag is enabled,
certificates will be automatically provisioned from the default shared CAs. This flag should
not be set if you want to use your own CA pools to provision the certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#use_default_shared_ca IamWorkloadIdentityPool#use_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfig <a name="IamWorkloadIdentityPoolInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfig {
    IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] AdditionalTrustBundles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | additional_trust_bundles block. |

---

##### `AdditionalTrustBundles`<sup>Optional</sup> <a name="AdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] AdditionalTrustBundles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

additional_trust_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#additional_trust_bundles IamWorkloadIdentityPool#additional_trust_bundles}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles {
    IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] TrustAnchors,
    string TrustDomain,
    bool|IResolvable TrustDefaultSharedCa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors">TrustAnchors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | trust_anchors block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain">TrustDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa">TrustDefaultSharedCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to True, the trust bundle will include the private ca managed identity regional root public certificates. |

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] TrustAnchors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_anchors IamWorkloadIdentityPool#trust_anchors}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain"></a>

```csharp
public string TrustDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}.

---

##### `TrustDefaultSharedCa`<sup>Optional</sup> <a name="TrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa"></a>

```csharp
public bool|IResolvable TrustDefaultSharedCa { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to True, the trust bundle will include the private ca managed identity regional root public certificates.

~> **Note** 'trust_default_shared_ca' is only supported for managed identity trust domain
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#trust_default_shared_ca IamWorkloadIdentityPool#trust_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors {
    string PemCertificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; set; }
```

- *Type:* string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#pem_certificate IamWorkloadIdentityPool#pem_certificate}

---

### IamWorkloadIdentityPoolTimeouts <a name="IamWorkloadIdentityPoolTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolAttestationRulesList <a name="IamWorkloadIdentityPoolAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolAttestationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get"></a>

```csharp
private IamWorkloadIdentityPoolAttestationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolAttestationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---


### IamWorkloadIdentityPoolAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolAttestationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput">GoogleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleCloudResourceInput`<sup>Optional</sup> <a name="GoogleCloudResourceInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```csharp
public string GoogleCloudResourceInput { get; }
```

- *Type:* string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolAttestationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>

---


### IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools">ResetCaPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage">ResetRotationWindowPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa">ResetUseDefaultSharedCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaPools` <a name="ResetCaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools"></a>

```csharp
private void ResetCaPools()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```

##### `ResetRotationWindowPercentage` <a name="ResetRotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage"></a>

```csharp
private void ResetRotationWindowPercentage()
```

##### `ResetUseDefaultSharedCa` <a name="ResetUseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa"></a>

```csharp
private void ResetUseDefaultSharedCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput">CaPoolsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput">RotationWindowPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput">UseDefaultSharedCaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">CaPools</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa">UseDefaultSharedCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaPoolsInput`<sup>Optional</sup> <a name="CaPoolsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPoolsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `RotationWindowPercentageInput`<sup>Optional</sup> <a name="RotationWindowPercentageInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput"></a>

```csharp
public double RotationWindowPercentageInput { get; }
```

- *Type:* double

---

##### `UseDefaultSharedCaInput`<sup>Optional</sup> <a name="UseDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput"></a>

```csharp
public bool|IResolvable UseDefaultSharedCaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaPools`<sup>Required</sup> <a name="CaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CaPools { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; }
```

- *Type:* double

---

##### `UseDefaultSharedCa`<sup>Required</sup> <a name="UseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa"></a>

```csharp
public bool|IResolvable UseDefaultSharedCa { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```csharp
public IamWorkloadIdentityPoolInlineCertificateIssuanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```csharp
private IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors">PutTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa">ResetTrustDefaultSharedCa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustAnchors` <a name="PutTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors"></a>

```csharp
private void PutTrustAnchors(IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---

##### `ResetTrustDefaultSharedCa` <a name="ResetTrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa"></a>

```csharp
private void ResetTrustDefaultSharedCa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput">TrustAnchorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput">TrustDefaultSharedCaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput">TrustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa">TrustDefaultSharedCa</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">TrustDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList TrustAnchors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `TrustAnchorsInput`<sup>Optional</sup> <a name="TrustAnchorsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] TrustAnchorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---

##### `TrustDefaultSharedCaInput`<sup>Optional</sup> <a name="TrustDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput"></a>

```csharp
public bool|IResolvable TrustDefaultSharedCaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput"></a>

```csharp
public string TrustDomainInput { get; }
```

- *Type:* string

---

##### `TrustDefaultSharedCa`<sup>Required</sup> <a name="TrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa"></a>

```csharp
public bool|IResolvable TrustDefaultSharedCa { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```csharp
public string TrustDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```csharp
private IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput">PemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PemCertificateInput`<sup>Optional</sup> <a name="PemCertificateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```csharp
public string PemCertificateInput { get; }
```

- *Type:* string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```csharp
public string PemCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolInlineTrustConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles">PutAdditionalTrustBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles">ResetAdditionalTrustBundles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalTrustBundles` <a name="PutAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles"></a>

```csharp
private void PutAdditionalTrustBundles(IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---

##### `ResetAdditionalTrustBundles` <a name="ResetAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles"></a>

```csharp
private void ResetAdditionalTrustBundles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">AdditionalTrustBundles</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput">AdditionalTrustBundlesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalTrustBundles`<sup>Required</sup> <a name="AdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList AdditionalTrustBundles { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `AdditionalTrustBundlesInput`<sup>Optional</sup> <a name="AdditionalTrustBundlesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[] AdditionalTrustBundlesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```csharp
public IamWorkloadIdentityPoolInlineTrustConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---


### IamWorkloadIdentityPoolTimeoutsOutputReference <a name="IamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---




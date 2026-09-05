# `iamWorkloadIdentityPool` Submodule <a name="`iamWorkloadIdentityPool` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPool <a name="IamWorkloadIdentityPool" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPool(scope: Construct, id: string, config: IamWorkloadIdentityPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules">putAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig">putInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig">putInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules">resetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig">resetInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig">resetInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestationRules` <a name="putAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules"></a>

```typescript
public putAttestationRules(value: IResolvable | IamWorkloadIdentityPoolAttestationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putAttestationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---

##### `putInlineCertificateIssuanceConfig` <a name="putInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig"></a>

```typescript
public putInlineCertificateIssuanceConfig(value: IamWorkloadIdentityPoolInlineCertificateIssuanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineCertificateIssuanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `putInlineTrustConfig` <a name="putInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig"></a>

```typescript
public putInlineTrustConfig(value: IamWorkloadIdentityPoolInlineTrustConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putInlineTrustConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkloadIdentityPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `resetAttestationRules` <a name="resetAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetAttestationRules"></a>

```typescript
public resetAttestationRules(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInlineCertificateIssuanceConfig` <a name="resetInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineCertificateIssuanceConfig"></a>

```typescript
public resetInlineCertificateIssuanceConfig(): void
```

##### `resetInlineTrustConfig` <a name="resetInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetInlineTrustConfig"></a>

```typescript
public resetInlineTrustConfig(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules">attestationRules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig">inlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig">inlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput">attestationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput">inlineCertificateIssuanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput">inlineTrustConfigInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attestationRules`<sup>Required</sup> <a name="attestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRules"></a>

```typescript
public readonly attestationRules: IamWorkloadIdentityPoolAttestationRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList">IamWorkloadIdentityPoolAttestationRulesList</a>

---

##### `inlineCertificateIssuanceConfig`<sup>Required</sup> <a name="inlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfig"></a>

```typescript
public readonly inlineCertificateIssuanceConfig: IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference">IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference</a>

---

##### `inlineTrustConfig`<sup>Required</sup> <a name="inlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfig"></a>

```typescript
public readonly inlineTrustConfig: IamWorkloadIdentityPoolInlineTrustConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference">IamWorkloadIdentityPoolInlineTrustConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `attestationRulesInput`<sup>Optional</sup> <a name="attestationRulesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.attestationRulesInput"></a>

```typescript
public readonly attestationRulesInput: IResolvable | IamWorkloadIdentityPoolAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inlineCertificateIssuanceConfigInput`<sup>Optional</sup> <a name="inlineCertificateIssuanceConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineCertificateIssuanceConfigInput"></a>

```typescript
public readonly inlineCertificateIssuanceConfigInput: IamWorkloadIdentityPoolInlineCertificateIssuanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---

##### `inlineTrustConfigInput`<sup>Optional</sup> <a name="inlineTrustConfigInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.inlineTrustConfigInput"></a>

```typescript
public readonly inlineTrustConfigInput: IamWorkloadIdentityPoolInlineTrustConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkloadIdentityPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolAttestationRules <a name="IamWorkloadIdentityPoolAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolAttestationRules: iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'. |

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//run.googleapis.com/projects/123/type/Service/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#google_cloud_resource IamWorkloadIdentityPool#google_cloud_resource}

---

### IamWorkloadIdentityPoolConfig <a name="IamWorkloadIdentityPoolConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolConfig: iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules">attestationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description">description</a></code> | <code>string</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the pool is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig">inlineCertificateIssuanceConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | inline_certificate_issuance_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig">inlineTrustConfig</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | inline_trust_config block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode">mode</a></code> | <code>string</code> | The mode for the pool is operating in. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `attestationRules`<sup>Optional</sup> <a name="attestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.attestationRules"></a>

```typescript
public readonly attestationRules: IResolvable | IamWorkloadIdentityPoolAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#attestation_rules IamWorkloadIdentityPool#attestation_rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#deletion_policy IamWorkloadIdentityPool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineCertificateIssuanceConfig`<sup>Optional</sup> <a name="inlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineCertificateIssuanceConfig"></a>

```typescript
public readonly inlineCertificateIssuanceConfig: IamWorkloadIdentityPoolInlineCertificateIssuanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

inline_certificate_issuance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#inline_certificate_issuance_config IamWorkloadIdentityPool#inline_certificate_issuance_config}

---

##### `inlineTrustConfig`<sup>Optional</sup> <a name="inlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.inlineTrustConfig"></a>

```typescript
public readonly inlineTrustConfig: IamWorkloadIdentityPoolInlineTrustConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

inline_trust_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#inline_trust_config IamWorkloadIdentityPool#inline_trust_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.mode"></a>

```typescript
public readonly mode: string;
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#mode IamWorkloadIdentityPool#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

### IamWorkloadIdentityPoolInlineCertificateIssuanceConfig <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolInlineCertificateIssuanceConfig: iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools">caPools</a></code> | <code>{[ key: string ]: string}</code> | A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the key pair. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime">lifetime</a></code> | <code>string</code> | Lifetime of the workload certificates issued by the CA pool in seconds. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage">rotationWindowPercentage</a></code> | <code>number</code> | Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa">useDefaultSharedCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the trust domain will utilize the GCP-provisioned default CA. |

---

##### `caPools`<sup>Optional</sup> <a name="caPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.caPools"></a>

```typescript
public readonly caPools: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A required mapping of a cloud region to the CA pool resource located in that region used for certificate issuance, adhering to these constraints:  * **Key format:** A supported cloud region name equivalent to the location identifier in the corresponding map entry's value.

* **Value format:** A valid CA pool resource path format like:
'projects/{project}/locations/{location}/caPools/{ca_pool}'
* **Region Matching:** Workloads are ONLY issued certificates from CA pools within the
same region. Also the CA pool region (in value) must match the workload's region (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#ca_pools IamWorkloadIdentityPool#ca_pools}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#key_algorithm IamWorkloadIdentityPool#key_algorithm}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

Lifetime of the workload certificates issued by the CA pool in seconds.

Must be between
'86400s' (24 hours) to '2592000s' (30 days), ends in the suffix "'s'" (indicating seconds)
and is preceded by the number of seconds. If unspecified, this will be defaulted to
'86400s' (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#lifetime IamWorkloadIdentityPool#lifetime}

---

##### `rotationWindowPercentage`<sup>Optional</sup> <a name="rotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```typescript
public readonly rotationWindowPercentage: number;
```

- *Type:* number

Rotation window percentage indicating when certificate rotation should be initiated based on remaining lifetime.

Must be between '50' - '80'. If unspecified, this will be defaulted
to '50'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#rotation_window_percentage IamWorkloadIdentityPool#rotation_window_percentage}

---

##### `useDefaultSharedCa`<sup>Optional</sup> <a name="useDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig.property.useDefaultSharedCa"></a>

```typescript
public readonly useDefaultSharedCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the trust domain will utilize the GCP-provisioned default CA.

A default
CA in the same region as the workload will be selected to issue the certificate. Enabling
this will clear any existing 'ca_pools' configuration to provision the certificates.

~> **Note** This field is mutually exclusive with 'ca_pools'. If this flag is enabled,
certificates will be automatically provisioned from the default shared CAs. This flag should
not be set if you want to use your own CA pools to provision the certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#use_default_shared_ca IamWorkloadIdentityPool#use_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfig <a name="IamWorkloadIdentityPoolInlineTrustConfig" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolInlineTrustConfig: iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles">additionalTrustBundles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | additional_trust_bundles block. |

---

##### `additionalTrustBundles`<sup>Optional</sup> <a name="additionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig.property.additionalTrustBundles"></a>

```typescript
public readonly additionalTrustBundles: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

additional_trust_bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#additional_trust_bundles IamWorkloadIdentityPool#additional_trust_bundles}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles: iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors">trustAnchors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | trust_anchors block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain">trustDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa">trustDefaultSharedCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to True, the trust bundle will include the private ca managed identity regional root public certificates. |

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#trust_anchors IamWorkloadIdentityPool#trust_anchors}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#trust_domain IamWorkloadIdentityPool#trust_domain}.

---

##### `trustDefaultSharedCa`<sup>Optional</sup> <a name="trustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles.property.trustDefaultSharedCa"></a>

```typescript
public readonly trustDefaultSharedCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to True, the trust bundle will include the private ca managed identity regional root public certificates.

~> **Note** 'trust_default_shared_ca' is only supported for managed identity trust domain
resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#trust_default_shared_ca IamWorkloadIdentityPool#trust_default_shared_ca}

---

### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors: iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert). |

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

PEM certificate of the PKI used for validation. Must only contain one ca certificate(either root or intermediate cert).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#pem_certificate IamWorkloadIdentityPool#pem_certificate}

---

### IamWorkloadIdentityPoolTimeouts <a name="IamWorkloadIdentityPoolTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolTimeouts: iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolAttestationRulesList <a name="IamWorkloadIdentityPoolAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get"></a>

```typescript
public get(index: number): IamWorkloadIdentityPoolAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>[]

---


### IamWorkloadIdentityPoolAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput">googleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleCloudResourceInput`<sup>Optional</sup> <a name="googleCloudResourceInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```typescript
public readonly googleCloudResourceInput: string;
```

- *Type:* string

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolAttestationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolAttestationRules">IamWorkloadIdentityPoolAttestationRules</a>

---


### IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference <a name="IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools">resetCaPools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage">resetRotationWindowPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa">resetUseDefaultSharedCa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaPools` <a name="resetCaPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetCaPools"></a>

```typescript
public resetCaPools(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

##### `resetRotationWindowPercentage` <a name="resetRotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetRotationWindowPercentage"></a>

```typescript
public resetRotationWindowPercentage(): void
```

##### `resetUseDefaultSharedCa` <a name="resetUseDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.resetUseDefaultSharedCa"></a>

```typescript
public resetUseDefaultSharedCa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput">caPoolsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput">rotationWindowPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput">useDefaultSharedCaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools">caPools</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage">rotationWindowPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa">useDefaultSharedCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caPoolsInput`<sup>Optional</sup> <a name="caPoolsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPoolsInput"></a>

```typescript
public readonly caPoolsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `rotationWindowPercentageInput`<sup>Optional</sup> <a name="rotationWindowPercentageInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentageInput"></a>

```typescript
public readonly rotationWindowPercentageInput: number;
```

- *Type:* number

---

##### `useDefaultSharedCaInput`<sup>Optional</sup> <a name="useDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCaInput"></a>

```typescript
public readonly useDefaultSharedCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `caPools`<sup>Required</sup> <a name="caPools" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.caPools"></a>

```typescript
public readonly caPools: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `rotationWindowPercentage`<sup>Required</sup> <a name="rotationWindowPercentage" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.rotationWindowPercentage"></a>

```typescript
public readonly rotationWindowPercentage: number;
```

- *Type:* number

---

##### `useDefaultSharedCa`<sup>Required</sup> <a name="useDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.useDefaultSharedCa"></a>

```typescript
public readonly useDefaultSharedCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkloadIdentityPoolInlineCertificateIssuanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineCertificateIssuanceConfig">IamWorkloadIdentityPoolInlineCertificateIssuanceConfig</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get"></a>

```typescript
public get(index: number): IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors">putTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa">resetTrustDefaultSharedCa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustAnchors` <a name="putTrustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors"></a>

```typescript
public putTrustAnchors(value: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---

##### `resetTrustDefaultSharedCa` <a name="resetTrustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.resetTrustDefaultSharedCa"></a>

```typescript
public resetTrustDefaultSharedCa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput">trustAnchorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput">trustDefaultSharedCaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput">trustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa">trustDefaultSharedCa</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain">trustDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList</a>

---

##### `trustAnchorsInput`<sup>Optional</sup> <a name="trustAnchorsInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustAnchorsInput"></a>

```typescript
public readonly trustAnchorsInput: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---

##### `trustDefaultSharedCaInput`<sup>Optional</sup> <a name="trustDefaultSharedCaInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCaInput"></a>

```typescript
public readonly trustDefaultSharedCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trustDomainInput`<sup>Optional</sup> <a name="trustDomainInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomainInput"></a>

```typescript
public readonly trustDomainInput: string;
```

- *Type:* string

---

##### `trustDefaultSharedCa`<sup>Required</sup> <a name="trustDefaultSharedCa" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDefaultSharedCa"></a>

```typescript
public readonly trustDefaultSharedCa: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get"></a>

```typescript
public get(index: number): IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>[]

---


### IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```typescript
public readonly pemCertificateInput: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesTrustAnchors</a>

---


### IamWorkloadIdentityPoolInlineTrustConfigOutputReference <a name="IamWorkloadIdentityPoolInlineTrustConfigOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles">putAdditionalTrustBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles">resetAdditionalTrustBundles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalTrustBundles` <a name="putAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles"></a>

```typescript
public putAdditionalTrustBundles(value: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.putAdditionalTrustBundles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---

##### `resetAdditionalTrustBundles` <a name="resetAdditionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.resetAdditionalTrustBundles"></a>

```typescript
public resetAdditionalTrustBundles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles">additionalTrustBundles</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput">additionalTrustBundlesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalTrustBundles`<sup>Required</sup> <a name="additionalTrustBundles" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundles"></a>

```typescript
public readonly additionalTrustBundles: IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundlesList</a>

---

##### `additionalTrustBundlesInput`<sup>Optional</sup> <a name="additionalTrustBundlesInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.additionalTrustBundlesInput"></a>

```typescript
public readonly additionalTrustBundlesInput: IResolvable | IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles">IamWorkloadIdentityPoolInlineTrustConfigAdditionalTrustBundles</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkloadIdentityPoolInlineTrustConfig;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolInlineTrustConfig">IamWorkloadIdentityPoolInlineTrustConfig</a>

---


### IamWorkloadIdentityPoolTimeoutsOutputReference <a name="IamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPool } from '@cdktn/provider-google'

new iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---




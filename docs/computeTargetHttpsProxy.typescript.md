# `computeTargetHttpsProxy` Submodule <a name="`computeTargetHttpsProxy` Submodule" id="@cdktn/provider-google.computeTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetHttpsProxy <a name="ComputeTargetHttpsProxy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy google_compute_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

new computeTargetHttpsProxy.ComputeTargetHttpsProxy(scope: Construct, id: string, config: ComputeTargetHttpsProxyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig">ComputeTargetHttpsProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig">ComputeTargetHttpsProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates">resetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap">resetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind">resetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride">resetQuicOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData">resetTlsEarlyData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeTargetHttpsProxyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---

##### `resetCertificateManagerCertificates` <a name="resetCertificateManagerCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```typescript
public resetCertificateManagerCertificates(): void
```

##### `resetCertificateMap` <a name="resetCertificateMap" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap"></a>

```typescript
public resetCertificateMap(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```typescript
public resetHttpKeepAliveTimeoutSec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProxyBind` <a name="resetProxyBind" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind"></a>

```typescript
public resetProxyBind(): void
```

##### `resetQuicOverride` <a name="resetQuicOverride" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride"></a>

```typescript
public resetQuicOverride(): void
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy"></a>

```typescript
public resetServerTlsPolicy(): void
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates"></a>

```typescript
public resetSslCertificates(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsEarlyData` <a name="resetTlsEarlyData" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData"></a>

```typescript
public resetTlsEarlyData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeTargetHttpsProxy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeTargetHttpsProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId">proxyId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput">certificateManagerCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput">certificateMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput">proxyBindInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput">quicOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput">tlsEarlyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput">urlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap">certificateMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind">proxyBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride">quicOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData">tlsEarlyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap">urlMap</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId"></a>

```typescript
public readonly proxyId: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeTargetHttpsProxyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `certificateManagerCertificatesInput`<sup>Optional</sup> <a name="certificateManagerCertificatesInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```typescript
public readonly certificateManagerCertificatesInput: string[];
```

- *Type:* string[]

---

##### `certificateMapInput`<sup>Optional</sup> <a name="certificateMapInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput"></a>

```typescript
public readonly certificateMapInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```typescript
public readonly httpKeepAliveTimeoutSecInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `proxyBindInput`<sup>Optional</sup> <a name="proxyBindInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput"></a>

```typescript
public readonly proxyBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `quicOverrideInput`<sup>Optional</sup> <a name="quicOverrideInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput"></a>

```typescript
public readonly quicOverrideInput: string;
```

- *Type:* string

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```typescript
public readonly serverTlsPolicyInput: string;
```

- *Type:* string

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput"></a>

```typescript
public readonly sslCertificatesInput: string[];
```

- *Type:* string[]

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeTargetHttpsProxyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---

##### `tlsEarlyDataInput`<sup>Optional</sup> <a name="tlsEarlyDataInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput"></a>

```typescript
public readonly tlsEarlyDataInput: string;
```

- *Type:* string

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput"></a>

```typescript
public readonly urlMapInput: string;
```

- *Type:* string

---

##### `certificateManagerCertificates`<sup>Required</sup> <a name="certificateManagerCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates"></a>

```typescript
public readonly certificateManagerCertificates: string[];
```

- *Type:* string[]

---

##### `certificateMap`<sup>Required</sup> <a name="certificateMap" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `proxyBind`<sup>Required</sup> <a name="proxyBind" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind"></a>

```typescript
public readonly proxyBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `quicOverride`<sup>Required</sup> <a name="quicOverride" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride"></a>

```typescript
public readonly quicOverride: string;
```

- *Type:* string

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

##### `tlsEarlyData`<sup>Required</sup> <a name="tlsEarlyData" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData"></a>

```typescript
public readonly tlsEarlyData: string;
```

- *Type:* string

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetHttpsProxyConfig <a name="ComputeTargetHttpsProxyConfig" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.Initializer"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

const computeTargetHttpsProxyConfig: computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap">urlMap</a></code> | <code>string</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>string[]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap">certificateMap</a></code> | <code>string</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind">proxyBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride">quicOverride</a></code> | <code>string</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>string</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>string[]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData">tlsEarlyData</a></code> | <code>string</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap"></a>

```typescript
public readonly urlMap: string;
```

- *Type:* string

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```typescript
public readonly certificateManagerCertificates: string[];
```

- *Type:* string[]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `certificateMap`<sup>Optional</sup> <a name="certificateMap" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap"></a>

```typescript
public readonly certificateMap: string;
```

- *Type:* string

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#deletion_policy ComputeTargetHttpsProxy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```typescript
public readonly httpKeepAliveTimeoutSec: number;
```

- *Type:* number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind"></a>

```typescript
public readonly proxyBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `quicOverride`<sup>Optional</sup> <a name="quicOverride" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride"></a>

```typescript
public readonly quicOverride: string;
```

- *Type:* string

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```typescript
public readonly serverTlsPolicy: string;
```

- *Type:* string

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates"></a>

```typescript
public readonly sslCertificates: string[];
```

- *Type:* string[]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeTargetHttpsProxyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `tlsEarlyData`<sup>Optional</sup> <a name="tlsEarlyData" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData"></a>

```typescript
public readonly tlsEarlyData: string;
```

- *Type:* string

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

### ComputeTargetHttpsProxyTimeouts <a name="ComputeTargetHttpsProxyTimeouts" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.Initializer"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

const computeTargetHttpsProxyTimeouts: computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetHttpsProxyTimeoutsOutputReference <a name="ComputeTargetHttpsProxyTimeoutsOutputReference" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeTargetHttpsProxy } from '@cdktn/provider-google'

new computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeTargetHttpsProxyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---




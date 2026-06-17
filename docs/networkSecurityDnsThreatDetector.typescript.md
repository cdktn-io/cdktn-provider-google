# `networkSecurityDnsThreatDetector` Submodule <a name="`networkSecurityDnsThreatDetector` Submodule" id="@cdktn/provider-google.networkSecurityDnsThreatDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityDnsThreatDetector <a name="NetworkSecurityDnsThreatDetector" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector google_network_security_dns_threat_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

new networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector(scope: Construct, id: string, config: NetworkSecurityDnsThreatDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig">NetworkSecurityDnsThreatDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig">NetworkSecurityDnsThreatDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetExcludedNetworks">resetExcludedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetThreatDetectorProvider">resetThreatDetectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityDnsThreatDetectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetExcludedNetworks` <a name="resetExcludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetExcludedNetworks"></a>

```typescript
public resetExcludedNetworks(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetThreatDetectorProvider` <a name="resetThreatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetThreatDetectorProvider"></a>

```typescript
public resetThreatDetectorProvider(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityDnsThreatDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityDnsThreatDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityDnsThreatDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference">NetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworksInput">excludedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput">threatDetectorProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworks">excludedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProvider">threatDetectorProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityDnsThreatDetectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference">NetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `excludedNetworksInput`<sup>Optional</sup> <a name="excludedNetworksInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworksInput"></a>

```typescript
public readonly excludedNetworksInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `threatDetectorProviderInput`<sup>Optional</sup> <a name="threatDetectorProviderInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput"></a>

```typescript
public readonly threatDetectorProviderInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `excludedNetworks`<sup>Required</sup> <a name="excludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.excludedNetworks"></a>

```typescript
public readonly excludedNetworks: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `threatDetectorProvider`<sup>Required</sup> <a name="threatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.threatDetectorProvider"></a>

```typescript
public readonly threatDetectorProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityDnsThreatDetectorConfig <a name="NetworkSecurityDnsThreatDetectorConfig" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.Initializer"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

const networkSecurityDnsThreatDetectorConfig: networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.name">name</a></code> | <code>string</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks">excludedNetworks</a></code> | <code>string[]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#id NetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.location">location</a></code> | <code>string</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#project NetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider">threatDetectorProvider</a></code> | <code>string</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#name NetworkSecurityDnsThreatDetector#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#deletion_policy NetworkSecurityDnsThreatDetector#deletion_policy}

---

##### `excludedNetworks`<sup>Optional</sup> <a name="excludedNetworks" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks"></a>

```typescript
public readonly excludedNetworks: string[];
```

- *Type:* string[]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#excluded_networks NetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#id NetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#labels NetworkSecurityDnsThreatDetector#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#location NetworkSecurityDnsThreatDetector#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#project NetworkSecurityDnsThreatDetector#project}.

---

##### `threatDetectorProvider`<sup>Optional</sup> <a name="threatDetectorProvider" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider"></a>

```typescript
public readonly threatDetectorProvider: string;
```

- *Type:* string

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#threat_detector_provider NetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#timeouts NetworkSecurityDnsThreatDetector#timeouts}

---

### NetworkSecurityDnsThreatDetectorTimeouts <a name="NetworkSecurityDnsThreatDetectorTimeouts" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.Initializer"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

const networkSecurityDnsThreatDetectorTimeouts: networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#create NetworkSecurityDnsThreatDetector#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#delete NetworkSecurityDnsThreatDetector#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#update NetworkSecurityDnsThreatDetector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#create NetworkSecurityDnsThreatDetector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#delete NetworkSecurityDnsThreatDetector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/network_security_dns_threat_detector#update NetworkSecurityDnsThreatDetector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityDnsThreatDetectorTimeoutsOutputReference <a name="NetworkSecurityDnsThreatDetectorTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityDnsThreatDetector } from '@cdktn/provider-google'

new networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityDnsThreatDetector.NetworkSecurityDnsThreatDetectorTimeouts">NetworkSecurityDnsThreatDetectorTimeouts</a>

---




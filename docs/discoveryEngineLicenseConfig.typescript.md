# `discoveryEngineLicenseConfig` Submodule <a name="`discoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google.discoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineLicenseConfig <a name="DiscoveryEngineLicenseConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

new discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig(scope: Construct, id: string, config: DiscoveryEngineLicenseConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig">DiscoveryEngineLicenseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial">resetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndDate` <a name="putEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate"></a>

```typescript
public putEndDate(value: DiscoveryEngineLicenseConfigEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate"></a>

```typescript
public putStartDate(value: DiscoveryEngineLicenseConfigStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineLicenseConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```typescript
public resetAutoRenew(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetFreeTrial` <a name="resetFreeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```typescript
public resetFreeTrial(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineLicenseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput">freeTrialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput">licenseConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput">licenseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput">subscriptionTermInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput">subscriptionTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial">freeTrial</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate"></a>

```typescript
public readonly endDate: DiscoveryEngineLicenseConfigEndDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate"></a>

```typescript
public readonly startDate: DiscoveryEngineLicenseConfigStartDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineLicenseConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput"></a>

```typescript
public readonly endDateInput: DiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `freeTrialInput`<sup>Optional</sup> <a name="freeTrialInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```typescript
public readonly freeTrialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseConfigIdInput`<sup>Optional</sup> <a name="licenseConfigIdInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```typescript
public readonly licenseConfigIdInput: string;
```

- *Type:* string

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```typescript
public readonly licenseCountInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput"></a>

```typescript
public readonly startDateInput: DiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `subscriptionTermInput`<sup>Optional</sup> <a name="subscriptionTermInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```typescript
public readonly subscriptionTermInput: string;
```

- *Type:* string

---

##### `subscriptionTierInput`<sup>Optional</sup> <a name="subscriptionTierInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```typescript
public readonly subscriptionTierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `freeTrial`<sup>Required</sup> <a name="freeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial"></a>

```typescript
public readonly freeTrial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```typescript
public readonly licenseConfigId: string;
```

- *Type:* string

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```typescript
public readonly subscriptionTerm: string;
```

- *Type:* string

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```typescript
public readonly subscriptionTier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineLicenseConfigConfig <a name="DiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

const discoveryEngineLicenseConfigConfig: discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>string</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>string</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>string</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial">freeTrial</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```typescript
public readonly licenseConfigId: string;
```

- *Type:* string

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#license_config_id DiscoveryEngineLicenseConfig#license_config_id}

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#license_count DiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#location DiscoveryEngineLicenseConfig#location}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```typescript
public readonly startDate: DiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#start_date DiscoveryEngineLicenseConfig#start_date}

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```typescript
public readonly subscriptionTerm: string;
```

- *Type:* string

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#subscription_term DiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```typescript
public readonly subscriptionTier: string;
```

- *Type:* string

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#subscription_tier DiscoveryEngineLicenseConfig#subscription_tier}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#auto_renew DiscoveryEngineLicenseConfig#auto_renew}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```typescript
public readonly endDate: DiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#end_date DiscoveryEngineLicenseConfig#end_date}

---

##### `freeTrial`<sup>Optional</sup> <a name="freeTrial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```typescript
public readonly freeTrial: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#free_trial DiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#timeouts DiscoveryEngineLicenseConfig#timeouts}

---

### DiscoveryEngineLicenseConfigEndDate <a name="DiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

const discoveryEngineLicenseConfigEndDate: discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigStartDate <a name="DiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

const discoveryEngineLicenseConfigStartDate: discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigTimeouts <a name="DiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

const discoveryEngineLicenseConfigTimeouts: discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineLicenseConfigEndDateOutputReference <a name="DiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

new discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineLicenseConfigEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---


### DiscoveryEngineLicenseConfigStartDateOutputReference <a name="DiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

new discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineLicenseConfigStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---


### DiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="DiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineLicenseConfig } from '@cdktn/provider-google'

new discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineLicenseConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---




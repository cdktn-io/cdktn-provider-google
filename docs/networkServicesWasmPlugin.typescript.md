# `networkServicesWasmPlugin` Submodule <a name="`networkServicesWasmPlugin` Submodule" id="@cdktn/provider-google.networkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesWasmPlugin <a name="NetworkServicesWasmPlugin" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPlugin(scope: Construct, id: string, config: NetworkServicesWasmPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig">NetworkServicesWasmPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig">NetworkServicesWasmPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig"></a>

```typescript
public putLogConfig(value: NetworkServicesWasmPluginLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesWasmPluginTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `putVersions` <a name="putVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions"></a>

```typescript
public putVersions(value: IResolvable | NetworkServicesWasmPluginVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesWasmPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy">usedBy</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput">mainVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput">versionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId">mainVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfig"></a>

```typescript
public readonly logConfig: NetworkServicesWasmPluginLogConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference">NetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesWasmPluginTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference">NetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `usedBy`<sup>Required</sup> <a name="usedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.usedBy"></a>

```typescript
public readonly usedBy: NetworkServicesWasmPluginUsedByList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList">NetworkServicesWasmPluginUsedByList</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versions"></a>

```typescript
public readonly versions: NetworkServicesWasmPluginVersionsList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList">NetworkServicesWasmPluginVersionsList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: NetworkServicesWasmPluginLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---

##### `mainVersionIdInput`<sup>Optional</sup> <a name="mainVersionIdInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```typescript
public readonly mainVersionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesWasmPluginTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.versionsInput"></a>

```typescript
public readonly versionsInput: IResolvable | NetworkServicesWasmPluginVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.mainVersionId"></a>

```typescript
public readonly mainVersionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesWasmPluginConfig <a name="NetworkServicesWasmPluginConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

const networkServicesWasmPluginConfig: networkServicesWasmPlugin.NetworkServicesWasmPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId">mainVersionId</a></code> | <code>string</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name">name</a></code> | <code>string</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions">versions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | versions block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description">description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location">location</a></code> | <code>string</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```typescript
public readonly mainVersionId: string;
```

- *Type:* string

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#main_version_id NetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#name NetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.versions"></a>

```typescript
public readonly versions: IResolvable | NetworkServicesWasmPluginVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#versions NetworkServicesWasmPlugin#versions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#deletion_policy NetworkServicesWasmPlugin#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#id NetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#location NetworkServicesWasmPlugin#location}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.logConfig"></a>

```typescript
public readonly logConfig: NetworkServicesWasmPluginLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#log_config NetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#project NetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesWasmPluginTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#timeouts NetworkServicesWasmPlugin#timeouts}

---

### NetworkServicesWasmPluginLogConfig <a name="NetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

const networkServicesWasmPluginLogConfig: networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel">minLogLevel</a></code> | <code>string</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate">sampleRate</a></code> | <code>number</code> | Non-empty default. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#enable NetworkServicesWasmPlugin#enable}

---

##### `minLogLevel`<sup>Optional</sup> <a name="minLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```typescript
public readonly minLogLevel: string;
```

- *Type:* string

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#min_log_level NetworkServicesWasmPlugin#min_log_level}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#sample_rate NetworkServicesWasmPlugin#sample_rate}

---

### NetworkServicesWasmPluginTimeouts <a name="NetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

const networkServicesWasmPluginTimeouts: networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#create NetworkServicesWasmPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#delete NetworkServicesWasmPlugin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#update NetworkServicesWasmPlugin#update}.

---

### NetworkServicesWasmPluginUsedBy <a name="NetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

const networkServicesWasmPluginUsedBy: networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy = { ... }
```


### NetworkServicesWasmPluginVersions <a name="NetworkServicesWasmPluginVersions" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

const networkServicesWasmPluginVersions: networkServicesWasmPlugin.NetworkServicesWasmPluginVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName">versionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description">description</a></code> | <code>string</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri">imageUri</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData">pluginConfigData</a></code> | <code>string</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri">pluginConfigUri</a></code> | <code>string</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#version_name NetworkServicesWasmPlugin#version_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#description NetworkServicesWasmPlugin#description}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#image_uri NetworkServicesWasmPlugin#image_uri}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#labels NetworkServicesWasmPlugin#labels}

---

##### `pluginConfigData`<sup>Optional</sup> <a name="pluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```typescript
public readonly pluginConfigData: string;
```

- *Type:* string

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#plugin_config_data NetworkServicesWasmPlugin#plugin_config_data}

---

##### `pluginConfigUri`<sup>Optional</sup> <a name="pluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```typescript
public readonly pluginConfigUri: string;
```

- *Type:* string

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_wasm_plugin#plugin_config_uri NetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesWasmPluginLogConfigOutputReference <a name="NetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">resetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetMinLogLevel` <a name="resetMinLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```typescript
public resetMinLogLevel(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">minLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">minLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `minLogLevelInput`<sup>Optional</sup> <a name="minLogLevelInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```typescript
public readonly minLogLevelInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `minLogLevel`<sup>Required</sup> <a name="minLogLevel" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```typescript
public readonly minLogLevel: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesWasmPluginLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginLogConfig">NetworkServicesWasmPluginLogConfig</a>

---


### NetworkServicesWasmPluginTimeoutsOutputReference <a name="NetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesWasmPluginTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginTimeouts">NetworkServicesWasmPluginTimeouts</a>

---


### NetworkServicesWasmPluginUsedByList <a name="NetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get"></a>

```typescript
public get(index: number): NetworkServicesWasmPluginUsedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkServicesWasmPluginUsedByOutputReference <a name="NetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesWasmPluginUsedBy;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginUsedBy">NetworkServicesWasmPluginUsedBy</a>

---


### NetworkServicesWasmPluginVersionsList <a name="NetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get"></a>

```typescript
public get(index: number): NetworkServicesWasmPluginVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesWasmPluginVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>[]

---


### NetworkServicesWasmPluginVersionsOutputReference <a name="NetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```typescript
import { networkServicesWasmPlugin } from '@cdktn/provider-google'

new networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">resetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">resetPluginConfigUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPluginConfigData` <a name="resetPluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```typescript
public resetPluginConfigData(): void
```

##### `resetPluginConfigUri` <a name="resetPluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```typescript
public resetPluginConfigUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">pluginConfigDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">pluginConfigDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">pluginConfigUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">pluginConfigData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">pluginConfigUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `pluginConfigDigest`<sup>Required</sup> <a name="pluginConfigDigest" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```typescript
public readonly pluginConfigDigest: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginConfigDataInput`<sup>Optional</sup> <a name="pluginConfigDataInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```typescript
public readonly pluginConfigDataInput: string;
```

- *Type:* string

---

##### `pluginConfigUriInput`<sup>Optional</sup> <a name="pluginConfigUriInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```typescript
public readonly pluginConfigUriInput: string;
```

- *Type:* string

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```typescript
public readonly versionNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginConfigData`<sup>Required</sup> <a name="pluginConfigData" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```typescript
public readonly pluginConfigData: string;
```

- *Type:* string

---

##### `pluginConfigUri`<sup>Required</sup> <a name="pluginConfigUri" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```typescript
public readonly pluginConfigUri: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesWasmPluginVersions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesWasmPlugin.NetworkServicesWasmPluginVersions">NetworkServicesWasmPluginVersions</a>

---




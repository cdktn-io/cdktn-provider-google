# `dnsResponsePolicy` Submodule <a name="`dnsResponsePolicy` Submodule" id="@cdktn/provider-google.dnsResponsePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicy <a name="DnsResponsePolicy" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy google_dns_response_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicy(scope: Construct, id: string, config: DnsResponsePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig">DnsResponsePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig">DnsResponsePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters">putGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters">resetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGkeClusters` <a name="putGkeClusters" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters"></a>

```typescript
public putGkeClusters(value: IResolvable | DnsResponsePolicyGkeClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putGkeClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]

---

##### `putNetworks` <a name="putNetworks" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | DnsResponsePolicyNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putNetworks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsResponsePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGkeClusters` <a name="resetGkeClusters" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetGkeClusters"></a>

```typescript
public resetGkeClusters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DnsResponsePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

dnsResponsePolicy.DnsResponsePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

dnsResponsePolicy.DnsResponsePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

dnsResponsePolicy.DnsResponsePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DnsResponsePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsResponsePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsResponsePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters">gkeClusters</a></code> | <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks">networks</a></code> | <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput">gkeClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput">networksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput">responsePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName">responsePolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gkeClusters`<sup>Required</sup> <a name="gkeClusters" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: DnsResponsePolicyGkeClustersList;
```

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList">DnsResponsePolicyGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networks"></a>

```typescript
public readonly networks: DnsResponsePolicyNetworksList;
```

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList">DnsResponsePolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DnsResponsePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference">DnsResponsePolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gkeClustersInput`<sup>Optional</sup> <a name="gkeClustersInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.gkeClustersInput"></a>

```typescript
public readonly gkeClustersInput: IResolvable | DnsResponsePolicyGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | DnsResponsePolicyNetworks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `responsePolicyNameInput`<sup>Optional</sup> <a name="responsePolicyNameInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyNameInput"></a>

```typescript
public readonly responsePolicyNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsResponsePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `responsePolicyName`<sup>Required</sup> <a name="responsePolicyName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.responsePolicyName"></a>

```typescript
public readonly responsePolicyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyConfig <a name="DnsResponsePolicyConfig" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

const dnsResponsePolicyConfig: dnsResponsePolicy.DnsResponsePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName">responsePolicyName</a></code> | <code>string</code> | The user assigned name for this Response Policy, such as 'myresponsepolicy'. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the response policy, such as 'My new response policy'. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters">gkeClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]</code> | gke_clusters block. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks">networks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `responsePolicyName`<sup>Required</sup> <a name="responsePolicyName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.responsePolicyName"></a>

```typescript
public readonly responsePolicyName: string;
```

- *Type:* string

The user assigned name for this Response Policy, such as 'myresponsepolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#response_policy_name DnsResponsePolicy#response_policy_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#deletion_policy DnsResponsePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the response policy, such as 'My new response policy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#description DnsResponsePolicy#description}

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: IResolvable | DnsResponsePolicyGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#gke_clusters DnsResponsePolicy#gke_clusters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#id DnsResponsePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | DnsResponsePolicyNetworks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#networks DnsResponsePolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#project DnsResponsePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsResponsePolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#timeouts DnsResponsePolicy#timeouts}

---

### DnsResponsePolicyGkeClusters <a name="DnsResponsePolicyGkeClusters" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

const dnsResponsePolicyGkeClusters: dnsResponsePolicy.DnsResponsePolicyGkeClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName">gkeClusterName</a></code> | <code>string</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters.property.gkeClusterName"></a>

```typescript
public readonly gkeClusterName: string;
```

- *Type:* string

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#gke_cluster_name DnsResponsePolicy#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DnsResponsePolicyNetworks <a name="DnsResponsePolicyNetworks" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

const dnsResponsePolicyNetworks: dnsResponsePolicy.DnsResponsePolicyNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl">networkUrl</a></code> | <code>string</code> | The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

The fully qualified URL of the VPC network to bind to. This should be formatted like 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#network_url DnsResponsePolicy#network_url}

---

### DnsResponsePolicyTimeouts <a name="DnsResponsePolicyTimeouts" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

const dnsResponsePolicyTimeouts: dnsResponsePolicy.DnsResponsePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#create DnsResponsePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#delete DnsResponsePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dns_response_policy#update DnsResponsePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyGkeClustersList <a name="DnsResponsePolicyGkeClustersList" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicyGkeClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get"></a>

```typescript
public get(index: number): DnsResponsePolicyGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>[]

---


### DnsResponsePolicyGkeClustersOutputReference <a name="DnsResponsePolicyGkeClustersOutputReference" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput">gkeClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName">gkeClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeClusterNameInput`<sup>Optional</sup> <a name="gkeClusterNameInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```typescript
public readonly gkeClusterNameInput: string;
```

- *Type:* string

---

##### `gkeClusterName`<sup>Required</sup> <a name="gkeClusterName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.gkeClusterName"></a>

```typescript
public readonly gkeClusterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyGkeClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyGkeClusters">DnsResponsePolicyGkeClusters</a>

---


### DnsResponsePolicyNetworksList <a name="DnsResponsePolicyNetworksList" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicyNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get"></a>

```typescript
public get(index: number): DnsResponsePolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyNetworks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>[]

---


### DnsResponsePolicyNetworksOutputReference <a name="DnsResponsePolicyNetworksOutputReference" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput">networkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkUrlInput`<sup>Optional</sup> <a name="networkUrlInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrlInput"></a>

```typescript
public readonly networkUrlInput: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyNetworks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyNetworks">DnsResponsePolicyNetworks</a>

---


### DnsResponsePolicyTimeoutsOutputReference <a name="DnsResponsePolicyTimeoutsOutputReference" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsResponsePolicy } from '@cdktn/provider-google'

new dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsResponsePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dnsResponsePolicy.DnsResponsePolicyTimeouts">DnsResponsePolicyTimeouts</a>

---



